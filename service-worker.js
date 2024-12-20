const CACHE_NAME = 'edulearn-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/styles/main.css',
  // Add other important assets to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 