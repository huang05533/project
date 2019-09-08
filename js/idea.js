$(function(){

	//鼠标移到图片上方，滑出字体
	// $('.img1').hover(function() {
	// 	$(this).siblings('#s1').animate({bottom: '30px'}, 200)
	// 	$(this).siblings('#s2').animate({bottom: '30px'}, 200)
	// }, function() {
	// 	$(this).siblings('#s1').animate({bottom: '-50px'}, 200)
	// 	$(this).siblings('#s2').animate({bottom: '-50px'}, 200)
	// });

	$('.img1').mouseenter(function(){
		$(this).siblings('#s1').animate({bottom: '30px'}, 200)
		$(this).siblings('#s2').animate({bottom: '30px'}, 200)
	})
	$('.img1').mouseleave(function(){
		$(this).siblings('#s1').animate({bottom: '-50px'}, 200)
		$(this).siblings('#s2').animate({bottom: '-50px'}, 200)
	})



})