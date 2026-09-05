"""Выкладка сайта blaqit.ru в объектное хранилище Selectel.

Почему свой скрипт, а не `aws s3 sync`. Штатный AWS CLI рассчитан на настоящий
S3; со сторонними хранилищами он ломается на ровном месте — то шлёт контрольные
суммы в формате, который там не поддержан, то выбирает адресацию, при которой
имя бакета с точкой («blaqit.ru») не совпадает с сертификатом хранилища.
Ошибка при этом вылезает во время выкладки, а не при правке workflow. boto3 с
явными настройками ведёт себя предсказуемо и проверяется локально.

Что делает: приводит содержимое бакета в точное соответствие с репозиторием —
заливает новое и изменившееся, удаляет то, чего в репозитории больше нет.
Сравнение по MD5 (ETag), поэтому неизменные файлы не перезаливаются.

Запуск (ключи — в переменных окружения):
    python deploy_to_selectel.py            # выложить
    python deploy_to_selectel.py --dry-run  # показать, что сделал бы
"""
from __future__ import annotations

import argparse
import hashlib
import mimetypes
import os
import sys
from pathlib import Path

import boto3
from botocore.config import Config

BUCKET = os.getenv("SELECTEL_BUCKET", "blaqit.ru")
ENDPOINT = os.getenv("SELECTEL_S3_ENDPOINT", "https://s3.ru-1.storage.selcloud.ru")
REGION = os.getenv("SELECTEL_S3_REGION", "ru-1")

ROOT = Path(__file__).resolve().parent

# Что в сайт не входит. CNAME — файл для GitHub Pages, на Selectel он не нужен;
# сам скрипт и служебные каталоги на сайте тоже делать нечего.
SKIP_DIRS = {".git", ".github", "__pycache__"}
SKIP_FILES = {"CNAME", "deploy_to_selectel.py", ".gitignore"}


def local_files() -> dict[str, Path]:
    out = {}
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        rel_parts = path.relative_to(ROOT).parts
        if any(part in SKIP_DIRS for part in rel_parts):
            continue
        if path.name in SKIP_FILES:
            continue
        out["/".join(rel_parts)] = path
    return out


def md5(path: Path) -> str:
    h = hashlib.md5()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def content_type(path: Path) -> str:
    guessed, _ = mimetypes.guess_type(path.name)
    if guessed:
        # Без явной кодировки браузер угадывает её сам и иногда угадывает не так:
        # русский текст на странице превращается в кракозябры.
        if guessed.startswith("text/") or guessed == "application/javascript":
            return guessed + "; charset=utf-8"
        return guessed
    return "application/octet-stream"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true",
                    help="только показать, что было бы сделано")
    args = ap.parse_args()

    key_id = os.getenv("SELECTEL_S3_ACCESS_KEY") or os.getenv("AWS_ACCESS_KEY_ID")
    secret = os.getenv("SELECTEL_S3_SECRET_KEY") or os.getenv("AWS_SECRET_ACCESS_KEY")
    if not key_id or not secret:
        print("Ключи доступа не заданы (SELECTEL_S3_ACCESS_KEY / SELECTEL_S3_SECRET_KEY)")
        return 2

    s3 = boto3.client(
        "s3",
        endpoint_url=ENDPOINT,
        aws_access_key_id=key_id,
        aws_secret_access_key=secret,
        region_name=REGION,
        # Адресация «путём», а не «поддоменом»: имя бакета содержит точку, и в
        # варианте с поддоменом оно не совпадает с сертификатом хранилища.
        config=Config(s3={"addressing_style": "path"}),
    )

    remote: dict[str, str] = {}
    paginator = s3.get_paginator("list_objects_v2")
    for page in paginator.paginate(Bucket=BUCKET):
        for obj in page.get("Contents", []):
            remote[obj["Key"]] = obj["ETag"].strip('"')

    local = local_files()

    uploaded = skipped = deleted = 0
    for key, path in sorted(local.items()):
        digest = md5(path)
        if remote.get(key) == digest:
            skipped += 1
            continue
        action = "изменился" if key in remote else "новый"
        # Значки только из ASCII: консоль Windows живёт в cp1251 и на стрелке
        # вроде «↑» падает с ошибкой кодировки прямо посреди выкладки.
        print(f"  [+] {key} ({action})")
        if not args.dry_run:
            with path.open("rb") as f:
                s3.put_object(Bucket=BUCKET, Key=key, Body=f,
                              ContentType=content_type(path))
        uploaded += 1

    for key in sorted(set(remote) - set(local)):
        print(f"  [-] {key} (в репозитории больше нет)")
        if not args.dry_run:
            s3.delete_object(Bucket=BUCKET, Key=key)
        deleted += 1

    print(f"\nИтого: залито {uploaded}, без изменений {skipped}, удалено {deleted}"
          + (" (ничего не делали — режим проверки)" if args.dry_run else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
