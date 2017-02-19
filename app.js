if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
	    navigator.serviceWorker.register('service-worker.js')
	    	.then(function(registration) {
		      	// success
		      	console.log('ServiceWorker Registered', registration);
	    	}).catch(function(error) {
		      	// failed
		      	console.log('ServiceWorker Registration failed:', error);
	    	});
	});
}
function getImage(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	    	document.getElementsByClassName('image')[0].src = "https://placeholdit.imgix.net/~text?txtsize=56&bg=92c952&txt=300%C3%97300&w=300&h=300";
	    }
	};
	xhttp.open("GET", "https://placeholdit.imgix.net/~text?txtsize=56&bg=92c952&txt=300%C3%97300&w=300&h=300", true);
	xhttp.send();
}
getImage();