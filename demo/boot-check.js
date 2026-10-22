/*
 * Подсказка вместо вечной заставки.
 *
 * Если основной бандл не запустился, человек видел бесконечно крутящийся
 * индикатор и говорил «не открывается». Понять причину было нельзя ни ему,
 * ни нам.
 *
 * ⚠️ Причин две, и называть надо ту, что есть на самом деле:
 *   1. связь медленная или сервер не отвечает — приложение просто ещё едет;
 *   2. браузер на телефоне слишком старый и код не выполнит вовсе.
 * Отличаем их по поддержке модулей: она появилась там же, где остальной
 * современный код, под который мы собираем (Safari 14, Chrome 87). Понимает
 * модули — значит телефон ни при чём, дело в загрузке. До 22.09.2026 текст
 * всегда обвинял браузер, и люди шли обновлять Safari вместо того, чтобы
 * сказать нам «у нас грузится по двадцать секунд».
 *
 * Этот файл — обычный скрипт, а не модуль: браузер, который не осилил
 * основной бандл, его всё равно выполнит. Отдельным файлом, а не инлайном,
 * потому что CSP страницы намеренно запрещает инлайновые скрипты.
 *
 * ⚠️ Двух слов о причине мало, нужна сама ошибка. 24.09.2026 CRM не
 * запускалась на одном iPhone (iOS 26.6) в Safari, Chrome и Телеграме
 * сразу, а на всех остальных устройствах и в том же движке WebKit на
 * компьютере работала. Узнать, что именно ломается, было нечем. Теперь
 * заставка ловит ошибки загрузки и запуска, показывает их на экране под
 * «Покажите этот экран администратору» и отправляет на сервер обычным
 * запросом /boot-report?d=… Его видно в журнале nginx, отдельного
 * эндпоинта для этого нет. В отчёте только тексты ошибок, имена файлов
 * приложения и версия браузера, персональных данных там нет.
 */
(function () {
  var errors = [];
  function remember(text) {
    if (errors.length < 6) errors.push(String(text).slice(0, 300));
  }
  // Фаза перехвата: так ловятся и ошибки кода, и файлы, которые не загрузились
  // (у <script>/<link> событие error не всплывает до window).
  window.addEventListener('error', function (e) {
    var t = e && e.target;
    if (t && t !== window && (t.src || t.href)) {
      remember('файл не загрузился: ' + String(t.src || t.href).split('/').pop());
      return;
    }
    var where = e && e.filename
      ? ' @ ' + String(e.filename).split('/').pop() + ':' + e.lineno + ':' + e.colno
      : '';
    remember(((e && e.message) || 'ошибка без текста') + where);
  }, true);
  window.addEventListener('unhandledrejection', function (e) {
    var r = e && e.reason;
    remember('promise: ' + ((r && (r.message || r)) || 'без текста'));
  });

  var retry = document.getElementById('boot-retry');
  if (retry) {
    retry.addEventListener('click', function () {
      window.location.reload();
    });
  }

  setTimeout(function () {
    var boot = document.getElementById('boot');
    // Приложение уже отрисовалось и заменило заставку — ничего не делаем.
    if (!boot) return;
    var modern = 'noModule' in document.createElement('script');
    boot.className = modern ? 'stuck stuck-slow' : 'stuck stuck-old';

    // Какие файлы приложения реально доехали: нет в списке — не скачался,
    // есть, но ошибок нет — скачался и завис при запуске.
    var files = [];
    try {
      performance.getEntriesByType('resource').forEach(function (r) {
        if (String(r.name).indexOf('/assets/') === -1) return;
        files.push(String(r.name).split('/').pop() + ' ' + Math.round(r.duration) + 'мс ' +
          (r.transferSize || 0) + 'б' + (r.responseStatus ? ' ' + r.responseStatus : ''));
      });
    } catch (_) { /* нет Resource Timing — просто без списка */ }

    var lines = [
      navigator.userAgent,
      'страница: ' + document.readyState,
      'ошибки: ' + (errors.length ? errors.join(' | ') : 'нет'),
      'файлы: ' + (files.length ? files.join(', ') : 'ни одного'),
    ];
    var ua = document.getElementById('boot-ua');
    if (ua) ua.textContent = lines.join('\n');

    try {
      new Image().src = '/boot-report?d=' + encodeURIComponent(lines.join(' ;; ').slice(0, 1800));
    } catch (_) { /* отчёт — подсказка, не условие работы */ }
  }, 20000);
})();
