self.addEventListener('install', (event) => {
  console.log('✅ Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Basic pass-through fetch handler
  event.respondWith(fetch(event.request));
});
