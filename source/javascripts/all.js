//= require jquery.js
//= require jquery.aniview.js
//= require jquery.aniview.min.js


$(document).ready(function() {
	$('.cool-person-popup-link').magnificPopup({ 
	  type: 'image'
	});
	   
});

 $(document).ready(function(){

	var options = {
	    animateThreshold: 200,
	    scrollPollInterval: 20
	}
	$('.aniview').AniView(options);
});
