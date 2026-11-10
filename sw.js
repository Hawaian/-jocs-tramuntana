// Tramuntana · Ment Activa 3.0.1 · PWA estàtica, configuració actualitzable.
const CACHE='mentactiva-pwa-v3-0-1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./marca-tramuntana.webp','./capcalera-mobil-viver.webp','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./favorits.json','./analitica.json'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith('tramuntana-pwa-')||k.startsWith('mentactiva-pwa-'))&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;
 const url=new URL(req.url);if(url.origin!==self.location.origin)return;
 const target=url.pathname.split('/').pop();
 if(target==='favorits.json'||target==='analitica.json'){
   event.respondWith(fetch(req,{cache:'no-store'}).then(res=>{if(res.ok){const copy=res.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)))}return res}).catch(async()=>await caches.match(req)||Response.error()));
   return;
 }
 if(req.mode==='navigate'){
   event.respondWith(fetch(req).then(res=>{if(res.ok){const copy=res.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put('./index.html',copy)))}return res}).catch(async()=>await caches.match('./index.html')||Response.error()));return;
 }
 event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{if(res.ok){const copy=res.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)))}return res})));
});
