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
			jQuery(".header-main").addClass("dark-header");
		} else {
			jQuery(".header-main").removeClass("dark-header");
		}
	});
});

jQuery('.our-partner-slider').slick({
	dots: false,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
		]
  });