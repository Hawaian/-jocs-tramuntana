// Jocs Tramuntana v2.7.1: publicació amb fitxers locals i renovació automàtica.
const CACHE='tramuntana-pwa-v2-7-1-icona2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./capcalera-tramuntana.webp','./capcalera-mobil-titol.webp','./capcalera-mobil-viver.webp','./icon-tramuntana-192.png','./icon-tramuntana-512.png'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('tramuntana-pwa-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url);
 if(req.method!=='GET'||url.origin!==self.location.origin)return;
 if(req.mode==='navigate'){
  event.respondWith(fetch(req).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put('./index.html',copy)))}return response}).catch(()=>caches.match('./index.html')));
 }else{
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(req,copy)))}return response})));
 }
});
