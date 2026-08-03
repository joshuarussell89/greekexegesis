/* Kolon service worker — makes the app work with no network at all.
   Cache-first for the shell, with a background refresh so a new version
   is picked up on the next launch. Your books and diagrams live in
   IndexedDB and are never touched by this. */
const CACHE = "kolon-v3";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL).catch(()=> c.add("./index.html")))
      .then(()=> self.skipWaiting())
  );
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(()=> self.clients.claim())
  );
});

self.addEventListener("fetch", e=>{
  const req = e.request;
  if(req.method !== "GET") return;
  e.respondWith(
    caches.match(req, {ignoreSearch:true}).then(hit=>{
      const net = fetch(req).then(res=>{
        if(res && res.status === 200 && res.type === "basic"){
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(()=> hit);
      return hit || net;
    })
  );
});
