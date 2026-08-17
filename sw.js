/* Nous service worker.

   The page itself is fetched NETWORK-FIRST: when there is a connection you
   always get the current build, and the cached copy is only used as an offline
   fallback. An earlier version was cache-first for everything, which meant an
   installed app happily served a months-old page forever.

   Icons and the manifest stay cache-first — they rarely change and are worth
   having instantly.

   Books and diagrams live in IndexedDB and are never touched here. */
const VERSION = "2026-08-13b";
const CACHE   = "nous-" + VERSION;
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

/* No skipWaiting here on purpose: a new worker waits until the page asks for
   it. Barging in changes the controller under a running page, and the page
   reloading in response to that is how a refresh loop starts. */
self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL).catch(()=> c.add("./index.html")))
  );
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(()=> self.clients.claim())
  );
});

self.addEventListener("message", e=>{
  if(e.data === "skipWaiting") self.skipWaiting();
});

function isDocument(req){
  return req.mode === "navigate" ||
         req.destination === "document" ||
         (req.headers.get("accept") || "").includes("text/html");
}

self.addEventListener("fetch", e=>{
  const req = e.request;
  if(req.method !== "GET") return;

  if(isDocument(req)){
    // network first, fall back to cache only when offline
    e.respondWith(
      fetch(req).then(res=>{
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put("./index.html", copy)).catch(()=>{});
        return res;
      }).catch(()=> caches.match(req).then(hit => hit || caches.match("./index.html")))
    );
    return;
  }

  // everything else: cache first, refreshed in the background
  e.respondWith(
    caches.match(req).then(hit=>{
      const net = fetch(req).then(res=>{
        if(res && res.status === 200 && res.type === "basic"){
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
        }
        return res;
      }).catch(()=> hit);
      return hit || net;
    })
  );
});
