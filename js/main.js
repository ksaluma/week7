$(document).ready(function() {

	var w = $('.hills').width() -$(window).width();
	var h = $('.hills').height() + w;

		$('body').css('height', h);

	$(window).on('scroll',function() {

		var px = $(window).scrollTop();
		$('.hills').css('left',-px)

	});

});

