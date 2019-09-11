$(function(){

	$('.img1').mouseenter(function(){
		$(this).siblings('#s1').animate({bottom: '4vw'}, 200)
		$(this).siblings('#s2').animate({bottom: '4vw'}, 200)
	})
	$('.img1').mouseleave(function(){
		$(this).siblings('#s1').animate({bottom: '-100px'}, 200)
		$(this).siblings('#s2').animate({bottom: '-100px'}, 200)
	})



})