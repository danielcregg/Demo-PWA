// Define cache name and files to cache
var cacheName = 'pwa-app-cache';
var filesToCache = ['/index.html'];

// Function to activate service worker
function activateServiceWorker(e) {
    console.log("[Service Worker] Activate")
}

// Function to install service worker
function installServiceWorker(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
}

// Function to fetch service worker
function fetchServiceWorker(e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
}

// Add event listeners for service worker
self.addEventListener("activate", activateServiceWorker);
self.addEventListener('install', installServiceWorker);
self.addEventListener('fetch', fetchServiceWorker);
