// Voir si on garde les 2 click vu que maintenant il y as des pages dédiés
/*$("#history").click(function() {
	$("html, body").animate({
		scrollTop: $(".template .history").offset().top
	}, "slow");
	return false;
});*/

$(".body-slogan").css({ minHeight: ($(window).innerHeight()- 70) + 'px' });
$(".body-histoy").css({ minHeight: ($(window).innerHeight()) + 'px' });
$(".body-car").css({ minHeight: ($(window).innerHeight()) + 'px' });
$(".body-car").css({ minHeight: ($(window).innerHeight()) + 'px' });
$(".body-flotte").css({ minHeight: ($(window).innerHeight()) + 'px' });
$(".body-ramassage").css({ minHeight: ($(window).innerHeight()) + 'px' });
$(".body-regu").css({ minHeight: ($(window).innerHeight()) + 'px' });

$("#contact-us").click(function() {
	$("html, body").animate({
		scrollTop: $(".contact-us").offset().top
	}, "slow");
	return false;
});

$("ul.nav li.dropdown").hover(function() {
	$(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn();
}, function() {
	$(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut();
});
