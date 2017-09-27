// Voir si on garde les 2 click vu que maintenant il y as des pages dédiés
/*$("#history").click(function() {
	$("html, body").animate({
		scrollTop: $(".template .history").offset().top
	}, "slow");
	return false;
});*/

$(".body-slogan").css({ minHeight: ($(window).innerHeight()) + 'px' });
$(".body-histoy").css({ minHeight: ($(window).innerHeight()) + 'px' });
$(".body-car").css({ minHeight: ($(window).innerHeight()) + 'px' });
$(".body-car").css({ minHeight: ($(window).innerHeight()) + 'px' });
$(".body-flotte").css({ minHeight: ($(window).innerHeight()) + 'px' });
$(".body-regu").css({ minHeight: ($(window).innerHeight()) + 'px' });

$( window ).resize(function() {
  $(".body-slogan").css({ minHeight: ($(window).innerHeight()) + 'px' });
  $(".body-histoy").css({ minHeight: ($(window).innerHeight()) + 'px' });
  $(".body-car").css({ minHeight: ($(window).innerHeight()) + 'px' });
  $(".body-car").css({ minHeight: ($(window).innerHeight()) + 'px' });
  $(".body-flotte").css({ minHeight: ($(window).innerHeight()) + 'px' });
  $(".body-regu").css({ minHeight: ($(window).innerHeight()) + 'px' });
});
console.log('fzef')
console.log('fzef')
console.log('fzef')

$("#activity").click(function() {
  console.log('fzefzefez')
	$("html, body").animate({
		scrollTop: $(".body-activity").offset().top
	}, "slow");
	return false;
});
$('#activity').click(function() {
  alert('Handler for .click() called.');
});

$("#history").click(function() {
  console.log('fzef')
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
$("#contact").click(function() {
	$("html, body").animate({
		scrollTop: $(".body-contact").offset().top
	}, "slow");
	return false;
});
$("#slogan").click(function() {
	$("html, body").animate({
		scrollTop: $(".body-slogan").offset().top
	}, "slow");
	return false;
});
