var cacheName = 'pwa-app-cache';
var filesToCache = ['/index.html'];

function activateServiceWorker(e) {
    console.log("[Service Worker] Activate")
}

function installServiceWorker(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
}

function fetchServiceWorker(e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
}

self.addEventListener("activate", activateServiceWorker);
self.addEventListener('install', installServiceWorker);
self.addEventListener('fetch', fetchServiceWorker);
