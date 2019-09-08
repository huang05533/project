$(function(){
	$('.mod').mouseenter(function(event) {
		$('.mod li:nth-child(1)').show()
	});
	$('.mod').mouseleave(function(event) {
		$('.mod li:nth-child(1)').hide()
	});


	//鼠标移到视频，播放
	$('.mv-li a').mouseenter(function(event) {
		$(this).children('video').trigger('play')
	});
	$('.mv-li a').mouseleave(function(event) {
		$(this).children('video').trigger('pause')
	});





})