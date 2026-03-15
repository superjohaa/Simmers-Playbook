// The Simmer's Playbook — Service Worker
// Network first: always tries to fetch fresh, falls back to cache if offline

const CACHE_NAME = 'simmers-playbook-v3';

// On install, skip waiting and take over immediately
self.addEventListener('install', event => {
  self.skipWaiting();
});

// On activate, delete ALL old caches and claim clients immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network first, cache as fallback for offline
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          return cached || caches.match('/index.html');
        });
      })
  );
});
