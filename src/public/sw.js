const CACHE_NAME = 'story-app-v1';

// Daftar aset yang akan di-cache
const assetsToCache = [
  './',
  './index.html',
  './app.webmanifest',
  './images/icons/icon-x144.png',
  './images/icons/maskable-icon-x48.png',
  './images/icons/maskable-icon-x96.png',
  './images/icons/maskable-icon-x192.png',
  './images/icons/maskable-icon-x384.png',
  './images/icons/maskable-icon-x512.png',
  './images/screenshots/CityCareApp_001.png',
  './images/screenshots/CityCareApp_002.png',
  './images/screenshots/CityCareApp_003.png',
  './images/screenshots/CityCareApp_004.png',
  './images/screenshots/CityCareApp_005.png',
  './images/screenshots/CityCareApp_006.png',
];

// Event install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assetsToCache)),
  );
});

// Event activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((filteredName) => caches.delete(filteredName)),
      );
    }),
  );
});

// Event fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // Clone the request
      const fetchRequest = event.request.clone();

      // Make network request and cache the response
      return fetch(fetchRequest).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    }),
  );
}); 