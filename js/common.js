
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
		targetTop = $target.offset().top - 100;
		if (targetTop <= scltop) {
			n = i - 1;
			$('body').removeClass();
			$('body').addClass('sec'+i);
			$('.gnb li').removeClass('active');
			$('.gnb li').eq(n).addClass('active');
		}
	})
	
});


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
	var sec2_t = $('#section2').offset().top + $('#section2').height() + 200;
	if(win > sec2_t ){
		$('#section2').addClass("on");
	}else{
		$('#section2').removeClass("on");
	}
})


$(window).scroll(function(){
    const scr = $(document).scrollTop();
    let pub_h = $("#section3").offset().top;

    //가로 스크롤_section3
    let offset = scr - pub_h

    if (scr > pub_h) {
        $("#section3 .project-wrap").css({ left: -offset });
    }
});