(function() {
  const staticCache = 's-cache-v0.1.3';
  const dynamicCache = 'd-cache-v0.1.3';
  const cacheStorage = [
    '/',
    './main.js',
    './worker.js',
    './vendors~main.js',
    './assets/img/gh-icon.png',
    './assets/img/gh-icon-512.png',
    './assets/img/dark-mode.svg',
    './assets/img/filter-list.svg',
    './assets/img/add-saved.svg',
    './assets/img/download.svg',
    './assets/img/delete.svg',
    './assets/img/search.svg',
    './assets/img/stars.svg',
    './index.html',
    './manifest.json',
    'https://fonts.googleapis.com/css?family=Noto+Sans+HK&display=swap'
  ];

  self.addEventListener('install', event => {
    event.waitUntil(caches.open(staticCache).then(cache => cache.addAll(cacheStorage)));
  });

  self.addEventListener('activate', event => {
    event.waitUntil(
      caches
        .keys()
        .then(keys =>
          Promise.all(
            keys
              .filter(key => key !== staticCache && key !== dynamicCache)
              .map(key => caches.delete(key))
          )
        )
    );
  });

  self.addEventListener('fetch', event => {
    event.respondWith(
      caches
        .match(event.request)
        .then(
          data =>
            data ||
            fetch(event.request).then(res =>
              caches.open(dynamicCache).then(cache => {
                cache.put(event.request.url, res.clone());
                return res;
              })
            )
        )
        .catch(() => caches.match('./index.html'))
    );
  });
})();
