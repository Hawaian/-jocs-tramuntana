// Tramuntana · Ment Activa 3.1.6 · PWA estàtica, configuració actualitzable.
const CACHE='mentactiva-pwa-v3-1-6-r15';
const ASSETS=['./','./index.html','./manifest.webmanifest','./marca-tramuntana.webp','./roda-verda.png','./capcalera-mobil-viver.webp','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./icona-sto.svg','./icona-stoa.svg','./icona-soi.svg','./icona-sfg.svg'];
const CONFIG=['./favorits.json','./favorits-cloud.json','./analitica.json'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(async cache=>{
  await cache.addAll(ASSETS);
  await Promise.allSettled(CONFIG.map(path=>cache.add(path)));
 }));
});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith('tramuntana-pwa-')||k.startsWith('mentactiva-pwa-'))&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;
 const url=new URL(req.url);if(url.origin!==self.location.origin)return;
 const target=url.pathname.split('/').pop();
 if(target==='favorits.json'||target==='favorits-cloud.json'||target==='analitica.json'){
   event.respondWith(fetch(req,{cache:'no-store'}).then(res=>{if(res.ok){const copy=res.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)))}return res}).catch(async()=>await caches.match(req)||Response.error()));
   return;
 }
 if(req.mode==='navigate'){
   event.respondWith(fetch(req).then(res=>{if(res.ok){const copy=res.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put('./index.html',copy)))}return res}).catch(async()=>await caches.match('./index.html')||Response.error()));return;
 }
 event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{if(res.ok){const copy=res.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)))}return res})));
});
