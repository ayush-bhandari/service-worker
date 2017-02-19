var cacheName = 'cacheName';
var cacheFiles = ['index.html','app.js'];

this.addEventListener('install', function(event){
	console.log("Service Worker install event");
	event.waitUntil(
		caches.open(cacheName).then(function(cache){
			console.log("Adding files to cache memory");
			return cache.addAll(cacheFiles);
		})
	)
})
this.addEventListener('activate', function(event){
	console.log("Service Worker activate event");
})
this.addEventListener('fetch', function(event){
	console.log("Service Worker fetch event");
})