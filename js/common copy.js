
var	isPC = $(window).width() > 1024;
var scrollEvent = false;
var elm = "#section3 .project";
var section = ".section";
var sectionArray = new Array;
var sectionCount = 0;

$(section).each(function(i){
	sectionArray[i] = $(this).offset().top;
});

$('.gnb a').on('click', function(){
	var menu_chk = $(this).attr('href');
	sectionCount = menu_chk.replace('#section', '');
	
	// page move
	scrollAnimateExec( sectionArray[ sectionCount ] );
});

$(window).on('resize', function(){
	isPC = $(window).width() > 1024;
});

$(window).on('load resize', function (){
	var scltop = $(window).scrollTop();
	$(section).each(function (index){
		var $target   = $(section).eq(index),
		i         = $target.index(),
		targetTop = $target.offset().top;
		if (targetTop <= scltop) {
			n = i - 1;
			$('body').removeClass();
			$('body').addClass('sec'+i);
			$('.gnb li').removeClass('active');
			$('.gnb li').eq(n).addClass('active');
		}
	})
});

$(window).scroll(function(){
	//manu navigation
	var scltop = $(window).scrollTop();
	$(section).each(function (index){
		var $target   = $(section).eq(index),
		i         = $target.index(),
		targetTop = $target.offset().top;
		if (targetTop <= scltop) {
			n = i - 1;
			$('body').removeClass();
			$('body').addClass('sec'+i);
			$('.gnb li').removeClass('active');
			$('.gnb li').eq(n).addClass('active');
		}
	})
	
});

function getScrollDelta() {
   var delta = 0;
   if (!event) event = window.event;
   if (event.wheelDelta) {
       delta = event.wheelDelta / 120;
       if (window.opera) delta = -delta;
   }
   else if (event.detail) {
       delta = -event.detail / 3;
   }
   return delta;
}
function scrollAnimateExec(moveTop) {
	$("html,body").stop().animate({ scrollTop: moveTop + 'px'}, 800,"easeInOutCubic");
}

function projectScroll() {
	$(elm).each(function (index) {
		// 개별적으로 Wheel 이벤트 적용
		$(this).on("mousewheel DOMMouseScroll", function (e) {
			var	isPC = $(window).width() > 1024;
			var num = 0;
			if( isPC == true ){
				if(event.ctrlKey == true){
				}else{
					e.preventDefault();
					if(scrollEvent == true) {
						return false;
					}
					scrollEvent = true;
					setTimeout(function() {
						scrollEvent = false;
					}, 50);
					var delta = getScrollDelta();
					var moveTop = $(window).scrollTop();
					var elmSelecter = $(elm).eq(index);
					
					// 마우스휠을 위에서 아래로
					if (delta < 0) {
						if(index==6){
							moveTop = $("#section4").offset().top;
						} else {
							if ($(elmSelecter).next() != undefined) {
								try{
									moveTop = $(elmSelecter).next().offset().top;
									//console.log(index);
								}catch(e){}
							}
						}
						// 마우스휠을 아래에서 위로
					} else {
						if(index==0){
							moveTop = $("body").offset().top;
						} else {
							if ($(elmSelecter).prev() != undefined) {
								try{
									moveTop = $(elmSelecter).prev().offset().top;
								}catch(e){}
							}
						}
					}
					// 화면 이동 0.8초(800)
					scrollAnimateExec(moveTop);
				}
			}
			
		});//$(this).on("mousewheel DOMMouseScroll"
	});//$(elm).each
}
$(window).on('load resize', function (){
	
	if( isPC == true ){
		
	}
});

if (matchMedia("screen and (min-width: 1024px)").matches) {
	// 1024px 이상에서 사용할 JavaScript
  } else {
	// 1024px 미만에서 사용할 JavaScript
  }
var controller = new ScrollMagic.Controller();

var horizontalSlide = new TimelineMax()
// animate panels
.to(".project-wrap", 1,   {x: "-20%"})	
.to(".project-wrap", 1,   {x: "-40%"})
.to(".project-wrap", 1,   {x: "-60%"})
.to(".project-wrap", 1,   {x: "-80%"})


// create scene to pin and link animation
new ScrollMagic.Scene({
triggerElement: ".project-wrap",
triggerHook: "onLeave",
duration: "400%"
})
.setPin(".project-wrap")
.setTween(horizontalSlide)
//.addIndicators() // add indicators (requires plugin)
.addTo(controller);


$(window).bind('scroll load orientationchange reload resize ready', function() {
	var win = $(window).scrollTop() + $(window).height();

	$('.fade-g').each(function(){
		if(win > $(this).offset().top ){
			$(this).addClass("on");
			$(this).find("> *").each(function(i){
				$(this).delay(i*150).queue(function(){
					$(this).addClass("on").dequeue();
				}); //('transition-delay', '.' + (i*18) + 's');
			 });
		}else{
			$(this).removeClass("on");
			$(this).find("> *").each(function(i){
				$(this).removeClass("on");
			});
		}
	})
})