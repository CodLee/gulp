$(function() {
	$('#fullpage').fullpage({
		scrollingSpeed: 500,
		controlArrows: false,
		//		resize:true,
		fixedElements: ".contact-wrapper",
		verticalCentered: false,
		slidesNavigation: true,
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
		afterRender: function() {
			//第六屏计算图片宽度
			$(".img-type1").width();
		},
		afterLoad: function(anchorLink, index) {
			if(index == 2) {
				$('.sec2-title').stop().animate({
					left: '0'
				}, 1000, 'easeInOutCirc');
				$('.sec2-cont-l').stop().animate({
					left: '21%'
				}, 1500, 'easeInOutQuart');
				$('.sec2-cont-r').stop().animate({
					right: '20%'
				}, 1500, 'easeInOutQuart');
			};
			if(index == 3) {
				var sec3WrapperHeight = $(".sec3-wrapper").height();
				$('.sec3-title').stop().animate({
					left: '5%'
				}, 1000, 'easeOutExpo');
				$('.sec3-wrapper').stop().animate({
					bottom: '40%'
				}, 1500, 'easeInOutQuart');
			};
			if(index == 4) {
				$('.sec4-title').stop().animate({
					left: '10%'
				}, 1000, 'easeOutExpo');
				$('.sec4-cont').stop().animate({
					top: '30%'
				}, 1500, 'easeInOutQuart');
				$('.sec4-nav').stop().animate({
					right: '10%'
				}, 2000, 'easeInOutQuart');
			};
			if(index == 5) {
				$('.sec5-title').stop().animate({
					top: '8%'
				}, 1000, 'easeOutExpo');
				$('.sec5-cont').stop().animate({
					top: '30%'
				}, 1500, 'easeInOutQuart');
				$(".share").stop().fadeIn();

			};
			if(index == 6) {
				var sec6_cont_height = $(".sec6-cont").height();
				$('.sec6-title').stop().animate({
					right: '0'
				}, 1000, 'easeOutExpo');
				$('.sec6-cont').stop().animate({
					top: '30%'
				}, 1500, 'easeInOutQuart');
			};
		},
		onLeave: function(index, direction) {
			if(index == 2) {
				$('.sec2-title').stop().animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('.sec2-cont-l').stop().animate({
					left: '-120%'
				}, 1500, 'easeInOutQuart');
				$('.sec2-cont-r').stop().animate({
					right: '-120%'
				}, 1500, 'easeInOutQuart');
			};
			if(index == 3) {
				$('.sec3-title').stop().animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('.sec3-wrapper').stop().animate({
					bottom: '-120%'
				}, 1500, 'easeInOutQuart');
			};
			if(index == 4) {
				$('.sec4-title').stop().animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('.sec4-cont').stop().animate({
					top: '-120%'
				}, 1500, 'easeInOutQuart');
				$('.sec4-nav').stop().animate({
					right: '-110%'
				}, 1500, 'easeInOutQuart');
			};
			if(index == 5) {
				$('.sec5-title').stop().animate({
					top: '-120%'
				}, 1500, 'easeOutExpo');
				$('.sec5-cont').stop().animate({
					top: '-120%'
				}, 1500, 'easeInOutQuart');
				$(".share").stop().fadeOut();

			};
			if(index != 6 && index != 7) {
				$('.sec6-title').stop().css({
					right: '-120%'
				});
				$('.sec6-cont').stop().css({
					top: '-120%'
				});
			};
		}
	});
	//第一屏导航栏特效
	$(".top-nav-item").hover(function() {
		$(this).find(".cover").stop().animate({
			top: 0
		}, 500, 'easeInOutCubic')
	}, function() {
		$(this).find(".cover").stop().animate({
			top: "-100%"
		}, 500, 'easeInOutCubic')
	});

	//第二屏 选项卡滑出
	$(".sec2-nav-wrapper").hover(function() {
		$(".sec2-nav").show().stop().animate({
			width: "100%"
		}, 1500, 'easeInOutQuart');
	}, function() {
		$(".sec2-nav").hide().stop().animate({
			width: "0"
		}, 100, 'easeOutExpo');
	})

	//第三屏特效
	var swiperSec3 = new Swiper('.swiperSec3', {
		autoplay: 2000,
		//      autoHeight: true,
		grabCursor: true,
		loop: true
	});

	//第四屏 选项卡
	$(".sec4-nav li").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		var _index = $(this).index();
		$(".sec4-cont-item").eq(_index).fadeIn().siblings().fadeOut();
	})

	//第五屏 
	//选项卡
	$(".sec5-cont-r li").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		var sec5_Show = $(this).index();
		$(".sec5-cont-l>li").eq(sec5_Show).animate({
			top: 0
		}).siblings().animate({
			top: "100%"
		})
	});
	//图片轮播
	var mySwiperSec5 = new Swiper('.mySwiperSec5', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplay: 3000,
		autoHeight: true,
		grabCursor: true,
		loop: true
	});

	//第六屏
	//轮播图
	var mySwiperSec6 = new Swiper('.SwiperSec6', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		//		autoplay : 2000,
		loop: true,
		autoHeight: true,
		grabCursor: true
	});
	//图片效果
	$(".sec6-imgbox span").hover(function() {
		$(this).find("img").removeClass("gray");
		$(this).find("a").animate({
			bottom: 0
		}, 200);
	}, function() {
		$(this).find("img").addClass("gray");
		$(this).find("a").animate({
			bottom: '-100%'
		});
	})

	//第七屏

	//底部联系我们滑出
	$(".callus").hover(function() {
		$(".callus-wrapper").stop().animate({
			left: 0
		}, 300);
	})
	$(".callus-wrapper .close").click(function() {
		$(".callus-wrapper").stop().animate({
			left: "-10000px"
		}, 3000);
	});
	//右侧边栏效果
	$(".contact-wrapper li").hover(function() {
		var no = $(this).index();
		$(this).css({
			background: 'url(../images/tip-bg-0' + (no + 1) + '.png)'
		})
	}, function() {
		var no = $(this).index();
		$(this).css({
			background: ''
		})
	})
});
//手机端总swiper
var phoneContainer = new Swiper('.phone-container', {
	direction: 'vertical',
	
});
//手机端首页swiper
var phoneBanner = new Swiper('.phone-banner', {
	direction: 'horizontal',
	pagination : '.swiper-pagination',
});

//首页的nav点击弹出
$(".phone-nav").click(function(event) {
	event.stopPropagation();
	$(".nav-tabs-fixed").show();
	$(document).on("click", function(event) {
		var className = event.target.className;
		if(className == "" || className == "phone-nav" || className == "index-header") {
			$(".nav-tabs-fixed").hide();
		}
	})
});

//第二页
var phoneBread = new Swiper('.phone-bread', {
	direction: 'horizontal',
	slidesPerView: 4,
	centeredSlides: false,
	spaceBetween : 10,
});
$(".navbar-p").click(function(){
	$(".navbar-p").removeClass("active");
	$(this).addClass("active");
})
/*
 * 第四页
 */
//上面的滑块
var pageFourSlide = new Swiper('.page-four-slide', {
	direction: 'horizontal',
	slidesPerView: 2.2
	,
	centeredSlides: false,
});
//
var brandSwiper= new Swiper('.brand-swiper',{
	direction: 'horizontal',
	onlyExternal : true,
})
//品牌图片轮播
var brandPic = new Swiper('.brand-pic', {
	direction: 'horizontal',
	slidesPerView: 2,
	autoplay: 1500,
	centeredSlides: false,
	loop: true,
});

//滑块的选择事件
$(".page-four-brand").click(function() {
	$(".page-four-brand").removeClass("active");
	$(this).addClass("active");
	var $index = $(this).attr("data-index");

	brandSwiper.slideTo($index);
});

//第5页
$(".choose-comment div").click(function() {
	$(this).addClass("active").siblings().removeClass("active");
	var $index = $(this).index();
	$(".comment-content div").eq($index).stop().animate({
		top: 0
	}).siblings().stop().animate({
		top: "300%"
	});
});

//图片评论轮播图
lunbo();
function lunbo(){
	$(".arrow-left").click(function() {
		var index = $(".contents .selected").index();
		if(index==0){
			index=$(".contents li").length-1;
			$(".contents li").removeClass("selected");
			$(".contents li").eq(index).addClass("selected");
		}else{
			index--;
			$(".contents li").removeClass("selected");
			$(".contents li").eq(index).addClass("selected");
		}
	});
	$(".arrow-right").click(function() {
		var index = $(".contents .selected").index();
		if(index==$(".contents li").length-1){
			index=0;
			$(".contents li").removeClass("selected");
			$(".contents li").eq(index).addClass("selected");
		}else{
			index++;
			$(".contents li").removeClass("selected");
			$(".contents li").eq(index).addClass("selected");
		}
	})
	
}

//第6页 
var pageSixUp = new Swiper('.page-six-up', {
	direction: 'horizontal',
	slidesPerView: 1.5,
	centeredSlides: false,
	loop: true,
	spaceBetween : 10,
});

var pageSixDown = new Swiper('.page-six-down', {
	direction: 'horizontal',
	slidesPerView: 1.1,
	centeredSlides: false,
	loop: true,
	spaceBetween : 10,
});