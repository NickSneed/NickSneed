const CACHE_NAME="nick-sneed-cache-v1",urlsToCache=["/","/index.html","/manifest.json"];self.addEventListener("install",(e=>{e.waitUntil(caches.open(CACHE_NAME).then((e=>e.addAll(urlsToCache))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))}));