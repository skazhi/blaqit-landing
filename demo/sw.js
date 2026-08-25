/*
 * KILL-SWITCH сервис-воркер.
 * Предыдущая версия кэшировала приложение и на части телефонов ломала загрузку.
 * Этот воркер НИЧЕГО не перехватывает: при активации он чистит все кэши,
 * снимает собственную регистрацию и перезагружает открытые вкладки —
 * то есть возвращает телефоны к обычной работе напрямую с сервера.
 */
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      } catch (e) { /* ignore */ }
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        try { client.navigate(client.url); } catch (e) { /* ignore */ }
      }
    })()
  );
});
// Никакого обработчика fetch — запросы идут в сеть как обычно.
