const CACHE_NAME = 'quran-audio-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-512.png'
];

// Install Event - cache the static core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Pre-caching static core assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).catch(err => {
      console.error('SW: Pre-cache failed', err);
    })
  );
  self.skipWaiting();
});

// Activate Event - clear old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('SW: Clearing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - handle requests gracefully
self.addEventListener('fetch', (event) => {
  // Only intercept HTTP/HTTPS protocol, ignore chrome-extension, etc.
  if (!event.request.url.startsWith('http')) return;

  const url = new URL(event.request.url);

  // We should NOT cache external audio streams or remote APIs because they are huge/dynamic
  if (url.origin !== self.location.origin) {
    return; // Let browser handle external network streams directly
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        // Skip caching non-successful or range requests (like partial content audio)
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        }).catch(err => console.warn('SW: Cache put failed', err));

        return networkResponse;
      }).catch(() => {
        // Safe offline response of the main document
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        return null;
      });
    })
  );
});
