
$(document).ready(function() {

	var welcomeSection = ($('#welcome').offset().top);
	var servicesSection = ($('#services').offset().top) - 300;
	var teamSection = ($('#team').offset().top);
	var skillsSection = ($('#skills').offset().top);
	var portfolioSection = ($('#portfolio').offset().top) - 300;
	var testimonialsSection = ($('#testimonials').offset().top) - 300;
	var contactSection = ($('#contact').offset().top) - 600;
	var footerSection = ($('#footer').offset().top);

	$('#homeNav').addClass('pagePosition');

	$('#homeNav').on('click', function() {
		$('#welcome').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
	});
	$('#aboutNav').on('click', function() {
		$('#services').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
	});
	$('#workNav').on('click', function() {
		$('#portfolio').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
	});
	$('#blogNav').on('click', function() {
		$('#testimonials').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
	});
	$('#contactNav').on('click', function() {
		$('#contact').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
	});

	var classChange = function(removingClass, addingClass) {
		$(removingClass).removeClass('pagePosition');
		$(addingClass).addClass('pagePosition');
	}

	$(window).scroll(function(event) {
		if (($(window).scrollTop() > welcomeSection) && ($(window).scrollTop() < servicesSection)) {
			classChange('#aboutNav', '#homeNav');
		} else if (($(window).scrollTop() > servicesSection) && ($(window).scrollTop() < teamSection)) {
			classChange('#homeNav', '#aboutNav');
		} else if (($(window).scrollTop() > skillsSection) && ($(window).scrollTop() < portfolioSection)) {
			classChange('#workNav', '#aboutNav');
		} else if (($(window).scrollTop() > portfolioSection) && ($(window).scrollTop() < testimonialsSection)) {
			$('#blogNav').removeClass('pagePosition');
			classChange('#aboutNav', '#workNav');
		} else if (($(window).scrollTop() > testimonialsSection) && ($(window).scrollTop() < contactSection)) {
			$('#contactNav').removeClass('pagePosition');
			classChange('#workNav', '#blogNav');
		} else if (($(window).scrollTop() > contactSection) && ($(window).scrollTop() < footerSection)) {
			classChange('#blogNav', '#contactNav');
		}
	});
});

