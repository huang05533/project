$(function(){

	$('.tea-li').hover(function() {
		$(this).children('.kuang').css('background-color', '#ccc');
		$(this).children('.larg').show();
		$(this).css('box-shadow', '1px 5px 0px #ccc');
		$(this).children('.yang').css({
			height: '2vw',
			color: 'black'
		});
	}, function() {
		$(this).children('.kuang').css('background-color', 'white');
		$(this).children('.larg').hide();
		$(this).css('box-shadow', '0px 2px 0px #ccc');
		$(this).children('.yang').css({
			height: '0vw',
			color: 'white'
		});
	});



})