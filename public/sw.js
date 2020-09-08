var StaticCaches = "offline-caches";

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(StaticCaches).then(function (cache) {
            return cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap',
                'https://fonts.googleapis.com/css2?family=Acme&display=swap',
                'https://fonts.gstatic.com/s/acme/v10/RrQfboBx-C5_XxrBbk_m3Lg.woff2',
                '/index.html',
                '/'
            ]);
        })
    );
})

self.addEventListener('fetch', function (event) {
    
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
    
});


self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cachesName) {
            return Promise.all(
                cachesName.filter(function (cacheName) {
                    return cacheName.startsWith('offline-') &&
                        cacheName != StaticCaches;
                }).map(function (cacheName) {
                    return cache.delete(cacheName)
                })
            );
            
        })
    );
})