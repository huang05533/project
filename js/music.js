
$(function(){
	

	//顶部导航栏
	var p=$(window).width();
	if(p>765){
		$(this).css('background-color', 'rgba(0,0,0,0)');
		$('.navbar-li').mouseenter(function(){
			$(this).children('.hide-nav').show();
			$(this).css({
				'background-color': '#ccc',
				'border-radius': '10px'
			});
			$(this).children('.nav-up').css('transform', 'rotate(180deg)');
		})
		$('.navbar-li').mouseleave(function(){
			$(this).children('.hide-nav').hide();
			$(this).css({
				'background-color': 'rgba(0,0,0,0)',
				'border-radius': '5px'
			});
			$(this).children('.nav-up').css('transform', 'rotate(0deg)');
		})
	}else{
		$(this).css('background-color', 'white');
		$('.navbar-li').mouseenter(function(){
			$(this).children('.hide-nav').show();
			$(this).css({
				'background-color': '#ccc',
				'border-radius': '10px'
			});
			$(this).children('.nav-up').css('transform', 'rotate(180deg)');
		})
		$('.navbar-li').mouseleave(function(){
			$(this).children('.hide-nav').hide();
			$(this).css({
				'background-color': 'white',
				'border-radius': '5px'
			});
			$(this).children('.nav-up').css('transform', 'rotate(0deg)');
		})
	}
	







	// 中间导航栏下拉菜单显示
	$('.mus-li').hover(function(){
		$(this).css('background-color', '#ccc');
		$(this).children('.hide-mus').show();
		$(this).children('.mus-up').css('transform', 'rotate(180deg)');
	}, function() {
		$(this).css('background-color', 'white');
		$(this).children('.hide-mus').hide();
		$(this).children('.mus-up').css('transform', 'rotate(0deg)');
	})

	$('#muss').hover(function() {
		$(this).css('background-color', 'black');
	}, function() {
		$(this).css('background-color', '#757575');
	});


	// 鼠标滑到图片上方，图片显示文字
	$('.photo-li').hover(function(){
		$(this).children('a').children('img').css('transform', 'scale(1.2)');
		$(this).children('.bla').css('opacity', '1');
		$(this).children('.bla').children('.bla-text').css('font-size', '16px');
	}, function() {
		$(this).children('.bla').css('opacity', '0');
		$(this).children('a').children('img').css('transform', 'scale(1)');
		$(this).children('.bla').children('.bla-text').css('font-size', '40px');
	})




})


