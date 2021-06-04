$(function () {
$( ".projects__nav div.pnavi" ).click(function() {
	var adjust = ($('.projects__nav').height())+45;
	$('html, body').animate({ scrollTop: ($('#'+$(this).data('val')).offset().top)-adjust},500);
});
});