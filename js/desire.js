
$(function(){

        //图片轮播
		// var num=0;
		// var timee;
  //       var n=0;
		// function zou(){
		// 	timee=setInterval(function(){
  //   			num++;
  //   			if(num==5){
  //                   n=0;
  //                   $('.current-ul li').eq(n).addClass('current').siblings('').removeClass('current');
  //               }
  //   			if(num>5){          	
  //   				num=0; 
  //                   $('.desi-ul').css('left', -1600*num+'px'); 
  //                   num=1;
  //   			}        			
  //               $('.current-ul li').eq(num).addClass('current').siblings('').removeClass('current');
  //       		$('.desi-ul').animate({'left':-1600*num+'px'})
  //   		},1500);	
  //   	}

		// zou();

  //       $('.desi-banner').hover(function() {     
  //           clearInterval(timee);
  //       }, function() {
  //           zou();
  //       });


  //       $('.left').click(function(event) {
  //           num--;
  //           if(num<0)
  //           {
  //               num=5;
  //               $('.desi-ul').css('left', -1600*num+'px'); 
  //               num=4;
  //           }
  //           $('.desi-ul').animate({'left':-1600*num+'px'})
  //           $('.current-ul li').eq(num).addClass('current').siblings('').removeClass('current');
  //       });


  //       $('.right').click(function(event) {
  //           num++;
  //           if(num==5){
  //               n=0;
  //               $('.current-ul li').eq(n).addClass('current').siblings('').removeClass('current');
  //           }
  //           if(num>5){                  
  //               num=0; 
  //               $('.desi-ul').css('left', -1600*num+'px'); 
  //               num=1;
  //           }
  //           $('.current-ul li').eq(num).addClass('current').siblings('').removeClass('current');
  //           $('.desi-ul').animate({'left':-1600*num+'px'})
  //       });


        // 图片透明度
        $('.des-pt a').mouseenter(function(event) {
            $(this).css('opacity', '0.8');
            $(this).parent('.des-pt').css('box-shadow','2px 5px 2px #ccc');
            $(this).children('.img-ti').show()
        });
        $('.des-pt a').mouseleave(function(event) {
            $(this).css('opacity', '1');
            $(this).parent('.des-pt').css('box-shadow','none');
            $(this).children('.img-ti').hide()
        });




        $(".desi-banner").silder({
            auto: true,//自动播放，传入任何可以转化为true的值都会自动轮播
            speed: 5,//轮播图运动速度
            sideCtrl: true,//是否需要侧边控制按钮
            bottomCtrl: true,//是否需要底部控制按钮
            defaultView: 0,//默认显示的索引
            interval: 200,//自动轮播的时间，以毫秒为单位，默认3000毫秒
            activeClass: "active",//小的控制按钮激活的样式，不包括作用两边，默认active
        });













})