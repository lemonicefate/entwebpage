/**
 * 誠心醫療體系工學診所衛教專區 — Service Worker
 * 策略：Cache First（優先讀快取，背景更新）
 */

const CACHE_NAME = 'entwebpage-v2-b2-react';
const PRE_CACHE = [
  './',
  './index.html',
  './src/styles/main.css',
  './js/content.js',
  './dist/app.js',
  './assets/logo.jpg',
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
  'https://unpkg.com/dompurify@3.1.6/dist/purify.min.js',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Instrument+Serif&display=swap',
];

// 安裝：預快取核心資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRE_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// 啟動：清理舊快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 攔截請求：Cache First + 背景更新
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // 只處理 GET 請求
  if (request.method !== 'GET') return;

  // 略過非同源請求（如 Google Fonts、GA）
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(request).then((cached) => {
        // 背景更新快取
        const fetchPromise = fetch(request).then((response) => {
          if (response && response.status === 200) {
            cache.put(request, response.clone());
          }
          return response;
        }).catch(() => null);

        // Cache First：有快取就先回傳
        if (cached) {
          return cached;
        }

        // 沒有快取：等待網路回應
        return fetchPromise.then((response) => {
          if (response) return response;

          // 完全離線且無快取：回傳離線提示（僅對 HTML 請求）
          if (request.headers.get('Accept') && request.headers.get('Accept').includes('text/html')) {
            return new Response(
              '<html><body style="font-family:sans-serif;text-align:center;padding:40px;">' +
              '<h1>📡 您目前處於離線狀態</h1>' +
              '<p>請檢查網路連線後重新整理頁面。</p></body></html>',
              { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
            );
          }

          return new Response('', { status: 503 });
        });
      });
    })
  );
});
