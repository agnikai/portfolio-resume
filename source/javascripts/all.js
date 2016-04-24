//= require jquery/dist/jquery.js
//= require jquery.aniview.js
//= require lightgallery/dist/js/lightgallery-all.js


 $(document).ready(function(){

 	$("#lightgallery").lightGallery();
 	$("#edit-lightgallery").lightGallery();

	var options = {
	    animateThreshold: 200,
	    scrollPollInterval: 20
	}
	$('.aniview').AniView(options); 
});
