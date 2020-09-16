self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('au-store').then(function(cache) {
        return cache.addAll([
          'index.html',
          'index.js',
          'app.css',
          'data.txt'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });