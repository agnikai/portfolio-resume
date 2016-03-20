//= require jquery.js
//= require jquery.magnific-popup.js
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


// $(document).ready(function() {
// 	$('.flipLightBox').flipLightBox();
// });

// $('body').flipLightBox({ 
// 	lightbox_flip_speed: 500, 
// lightbox_border_color: '#666666' 
// })



// $(document).ready(function(){
//  	$('h1.me').click(function () {
//  		// $(this).effect('bounce', 'slow');
//  		$(this).toggle('puff');
//  		// $(this).effect('shake');
//  	});
// });

// $(document).ready(function() {
// 	console.log("POOP");
// 	$('#open-gallery').on('click', function (event) {
//         thing = document.getElementById('links')
//         links = thing.getElementsByTagName('a');
// 	    blueimp.Gallery(links);
// 	});
// });





