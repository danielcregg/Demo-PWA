// Define cache name and files to cache
var cacheName = 'pwa-app-cache';
var filesToCache = ["/"];

// Function to install service worker
function installServiceWorker(e) {
    console.log("[Service Worker] Install");
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[Service Worker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
}

// Function to activate service worker
function activateServiceWorker(e) {
    console.log("[Service Worker] Activate")
}

// Function to fetch service worker
function fetchServiceWorker(e) {
    console.log("[Service Worker] Fetch");
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
}

// Add event listeners for service worker
self.addEventListener('install', installServiceWorker);
self.addEventListener('activate', activateServiceWorker);
self.addEventListener('fetch', fetchServiceWorker);
