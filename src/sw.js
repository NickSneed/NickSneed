const VERSION = '1.0.0';
const CACHE_NAME = `nick-sneed-cache-v${VERSION}`;
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/app.js'
];

// Install event handler
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Activate event handler to clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => cacheName.startsWith('nick-sneed-cache-'))
                    .filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Fetch event handler
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(request))
            .catch(() => {
                // Handle fetch failures
                console.log('Fetch failed for:', event.request.url);
                return new Response('Offline content');
            })
    );
});