import $ from 'jquery';

$( document ).ready(function() {
	if ($(window).width() <= 768){	
		$('.footer-links-wrapper').addClass("someClass");
	}else{
		$('.footer-links-wrapper').removeClass("someClass");
	}
	$(window).on('resize', function(event){
		if ($(window).width() <= 768){	
			$('.footer-links-wrapper').addClass("someClass");
		}else{
			$('.footer-links-wrapper').removeClass("someClass");
			$('.footer-links-wrapper ul').show();
		}	
	});
	// Footer collapse functionality 
	$(document).on("click", ".someClass h3", function(){
		$(this).next('ul').slideToggle();
		$(this).toggleClass("expanded");
	});
	// Search bar 
	$('.search-link').click(function(event){
		event.preventDefault();
		$(".navbar-collapse.collapse").removeClass("show");
		$(".searchbox").slideToggle();
	});

});