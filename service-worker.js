this.addEventListener('install', function(event){
	console.log("Service Worker install event");
})
this.addEventListener('activate', function(event){
	console.log("Service Worker activate event");
})
this.addEventListener('fetch', function(event){
	console.log("Service Worker fetch event");
})