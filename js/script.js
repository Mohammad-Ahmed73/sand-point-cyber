AOS.init({
	once: true,
});


jQuery(document).ready(function() {
	var scrollBtn = jQuery('#scrollToTop');

	jQuery(window).scroll(function() {
		if (jQuery(window).scrollTop() > 100) {
			scrollBtn.addClass('scrollBtn-show');
		} else {
			scrollBtn.removeClass('scrollBtn-show');
		}
	});

	scrollBtn.on('click', function(e) {
		e.preventDefault();
		jQuery('html, body').animate({scrollTop:0}, '300');
	});
});

/*-- Sticky Header Jquery --*/
jQuery(document).ready(function() {
	jQuery(window).scroll(function() {    
		var scroll = jQuery(window).scrollTop();
		if (scroll > 0) {
			jQuery(".header-main").addClass("shadow-sm dark-header");
		} else {
			jQuery(".header-main").removeClass("shadow-sm dark-header");
		}
	});
});

jQuery('.app-screenshots-slider').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	appendArrows: ".slider-arrows",
	prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
	nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
});