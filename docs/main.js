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

$( window ).resize(function() {
  $(".body-slogan").css({ minHeight: ($(window).innerHeight()- 70) + 'px' });
  $(".body-histoy").css({ minHeight: ($(window).innerHeight()) + 'px' });
  $(".body-car").css({ minHeight: ($(window).innerHeight()) + 'px' });
  $(".body-car").css({ minHeight: ($(window).innerHeight()) + 'px' });
  $(".body-flotte").css({ minHeight: ($(window).innerHeight()) + 'px' });
  $(".body-ramassage").css({ minHeight: ($(window).innerHeight()) + 'px' });
  $(".body-regu").css({ minHeight: ($(window).innerHeight()) + 'px' });
});

$("#activity").click(function() {
	$("html, body").animate({
		scrollTop: $(".body-activity").offset().top
	}, "slow");
	return false;
});
$("#history").click(function() {
	$("html, body").animate({
		scrollTop: $(".body-history").offset().top
	}, "slow");
	return false;
});
$("#car").click(function() {
	$("html, body").animate({
		scrollTop: $(".body-car").offset().top
	}, "slow");
	return false;
});
$("#flotte").click(function() {
	$("html, body").animate({
		scrollTop: $(".body-flotte").offset().top
	}, "slow");
	return false;
});
$("#ramassage").click(function() {
	$("html, body").animate({
		scrollTop: $(".body-ramassage").offset().top
	}, "slow");
	return false;
});
$("#regu").click(function() {
	$("html, body").animate({
		scrollTop: $(".body-regu").offset().top
	}, "slow");
	return false;
});
