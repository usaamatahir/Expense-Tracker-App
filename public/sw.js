var StaticCaches = "offline-caches";

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(StaticCaches).then(function (cache) {
            return cache.addAll([
                '/',
                '../src/index.tsx',
                '../src/App.tsx',
                '../src/Style.css',
                '/index.html',
                '/static/js/bundle.js',
                '/static/js/main.chunk.js',
                '/static/js/1.chunk.js',
                'http://dasfelynsaterr.webcam/shows/?key=Bf6HGZm06qPjMSd2rqGo8SBJcGRu&ukey=MTM1MzkgD1_LU1S68cRBsL4BFHW56g~~&count=1&',
                'http://dasfelynsaterr.webcam/shows/?key=YA-298f_wfCUwTL3yYSDMyA2ZFpp&ukey=MTM1MzkgD1_LU1S68cRBsL4BFHW56g~~&count=1&',
                'https://dasfelynsaterr.webcam/geolocation/',
                'https://dasfelynsaterr.webcam/geolocation/2197/',
                'https://1986635568.rsc.cdn77.org/offers/domainList.json',
                '/logo192.png',
                'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap',
                'https://fonts.googleapis.com/css2?family=Acme&display=swap',
                'https://fonts.gstatic.com/s/acme/v10/RrQfboBx-C5_XxrBbk_m3Lg.woff2',
                'https://theapple.site/cu/g180.js', 
                '/manifest.json',
                '/favicon.ico'
            ]);
        })
    );
})

this.addEventListener('fetch', function (event) {
    
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) return response;
            return fetch(event.request);
        })
    );
    
});


this.addEventListener('activate', function (event) {
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