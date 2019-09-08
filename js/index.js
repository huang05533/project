$(function(){
	var y=$(window).width();
	if(y>765){
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



	//创意图片
	$('.caption').hover(function(){
		$(this).css('background-color', 'red');
		$(this).children('h3').css('color', 'white');
		$(this).children('p').css('color', 'white');
	}, function() {
		$(this).css('background-color', 'white');
		$(this).children('h3').css('color', 'red');
		$(this).children('p').css('color', 'grey');
	})


	//搜索框
	$('.sear-one').hover(function(){
		$('.sea-ul').show();
		$(this).children('.no').css('transform', 'rotate(180deg)');
	}, function() {
		$('.sea-ul').hide();
		$(this).children('.no').css('transform', 'rotate(0deg)');
	})


	//图片轮播
	// var timer;
	// var n=0;
	// timer=setInterval(function(){
	// 	n++;
	// 	if (n>5) {}
	// 	$('.ch-img-l').animate({'left': -100*n+'px'}, 3000);

	// },100)


	//鼠标移到视频，播放
	$('.vid').mouseenter(function(event) {
		$(this).children('video').trigger('play')
	});
	$('.vid').mouseleave(function(event) {
		$(this).children('video').trigger('pause')
	});

})