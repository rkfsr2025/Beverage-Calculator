self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('beverage-calculator-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './beverage.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
