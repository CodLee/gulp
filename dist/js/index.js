$(function() {
	//第一屏焦点图
	var swiperSec1 = new Swiper('.sec1-banner', {
//      autoplay : 5000,
		pagination: '.sec1-swiper-pagination',
        loop : true
    });
	
	//第一屏导航栏特效
	$(".top-nav-item").hover(function(){
		$(this).find(".cover").stop().animate({
			top:0
		}, 500, 'easeInOutCubic')
	},function(){
		$(this).find(".cover").stop().animate({
			top:"-100%"
		}, 500)
	});
	//回到顶部
	$(".go-top").click(function(){
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
		if(scrollt > 200){
			$("html,body").animate({scrollTop:"0px"},300);
		}
	})
	
	
	//第二屏 选项卡滑出
	$(".sec2-nav-wrapper").hover(function(){
		$(".sec2-nav").show().stop().animate({
			width: "100%"
		}, 1500, 'easeInOutQuart');
	},function(){
		$(".sec2-nav").hide().stop().animate({
			width: "0"
		}, 100, 'easeOutExpo');
	})
	
	//第三屏特效
	var swiperSec3 = new Swiper('.swiperSec3', {
        autoplay : 2000,
//      autoHeight: true,
        grabCursor : true,
        loop : true
    });
	
	//第四屏 选项卡
	$(".sec4-nav li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var _index = $(this).index();
		$(".sec4-cont-item").eq(_index).fadeIn().siblings().fadeOut();
	})
	
	
	//第五屏 
	//选项卡
	$(".sec5-cont-r li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var sec5_Show = $(this).index();
		$(".video-pic-wrapper>li").eq(sec5_Show).addClass('active').siblings().removeClass("active");
	});
	//图片轮播
	var mySwiperSec5 = new Swiper('.mySwiperSec5', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplay : 3000,
        autoHeight: true,
        grabCursor : true,
        loop : true
	});
	
	
	//第六屏
	//轮播图
	var mySwiperSec6 = new Swiper('.SwiperSec6', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
//		autoplay : 2000,
        loop : true,
        autoHeight: true,
        grabCursor : true
	});
	//图片效果
	$(".sec6-imgbox span").hover(function(){
		$(this).find("img").removeClass("gray");
		$(this).find("a").animate({
			bottom:0
		},200);
	},function(){
		$(this).find("img").addClass("gray");
		$(this).find("a").animate({
			bottom:'-100%'
		});
	})
	
	//第七屏
	
	
	//底部联系我们滑出
	$(".callus").hover(function(){
		$(".callus-wrapper").stop().animate({
			left:0
		},300);
	})
	$(".callus-wrapper .close").click(function(){
		$(".callus-wrapper").stop().animate({
			left:"-10000px"
		},3000);
	});
	//右侧边栏效果
	$(".contact-wrapper li").hover(function(){
		var no = $(this).index();
		$(this).css({
			background: 'url(../images/tip-bg-0'+(no+1)+'.png)'
		})
	},function(){
		var no = $(this).index();
		$(this).css({
			background: ''
		})
	})
});
