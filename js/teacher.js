$(function(){

	$('.tea-li').hover(function() {
		$(this).children('.kuang').css('background-color', '#ccc');
		$(this).children('.larg').show();
		$(this).css('box-shadow', '1px 5px 0px #ccc');
		$(this).children('.yang').css({
			'color': 'black',
			'background-color':'white'
		});
	}, function() {
		$(this).children('.kuang').css('background-color', 'white');
		$(this).children('.larg').hide();
		$(this).css('box-shadow', '0px 2px 0px #ccc');
		$(this).children('.yang').css({
			'color': 'rgba(0,0,0,0)',
			'background-color':'rgba(0,0,0,0)'
		});
	});

	// var d=$(window).width();
	// if(d<481){
	// 	$('.tea-li').hover(function() {
	// 		$(this).children('.yang').css({
	// 			height: '4vw',
	// 		});
	// 	}, function() {
	// 		$(this).children('.yang').css({
	// 			height: '0vw',
	// 		});
	// 	});
	// }

})