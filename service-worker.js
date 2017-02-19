this.addEventListener('install', function(event){
	console.log("Service Worker install event");
	event.waitUntil(
		caches.open('newCacheName').then(function(cache){
			console.log("Adding files to cache memory");
			return cache.addAll(['index.html','app.js']);
		})
	)
})
this.addEventListener('activate', function(event){
	console.log("Service Worker activate event");
	var cacheName = ['newCacheName'];
	event.waitUntil(
	    caches.keys().then(function(list) {
	      	return Promise.all(list.map(function(item) {
		        if (item !== cacheName) {
		        	console.log("Removing old files from cache");
		          	return caches.delete(item);
		        }
	      	}));
	    })
	);
})
this.addEventListener('fetch', function(event){
	console.log("Service Worker fetch event");
	event.respondWith(
    	caches.match(event.request)
	    	.then(function(response) {
	    		if (response){
	    			console.log("fetching from cache");
	    			return response;
	    		}else{
	    			fetch(event.request).then(function(response) {
			        	caches.open('newCacheName').then(function(cache) {
			        		cache.put(event.request, response.clone());
			        	});
			        	console.log("fetched from API, cloned and cache updated");
	        			return response;
	      			});
	    		}
	    	})
	    	.catch(function(error) {
	    	  	console.log("error fetching", error);
	    	})
  	);
})