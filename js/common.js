
let section = ".section";
let sectionArray = new Array;
let sectionCount = 0;

$(section).each(function(i){
	sectionArray[i] = $(this).offset().top;
});

function scrollAnimateExec(moveTop) {
	$("html,body").stop().animate({ scrollTop: moveTop + 'px'}, 800,"easeInOutCubic");
}

$('.gnb a').on('click', function(){
	let menu_chk = $(this).attr('href');
	sectionCount = menu_chk.replace('#section', '');
	
	// page move
	scrollAnimateExec( sectionArray[ sectionCount ] );
});


$(window).on('load resize', function (){
	let scltop = $(window).scrollTop();
	$(section).each(function (index){
		let $target   = $(section).eq(index),
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
	let scltop = $(window).scrollTop();
	$(section).each(function (index){
		let $target   = $(section).eq(index),
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

// fade up effect
$(window).bind('scroll load orientationchange reload resize ready', function() {
	let win = $(window).scrollTop() + $(window).height();

	$('.fade-g').each(function(){
		if(win > $(this).offset().top ){
			$(this).addClass("on");
			$(this).find("> *").each(function(i){
				$(this).delay(i*150).queue(function(){
					$(this).addClass("on").dequeue();
				}); 
			 });
		}else{
			$(this).removeClass("on");
			$(this).find("> *").each(function(i){
				$(this).removeClass("on");
			});
		}
	})

	//section2
	let sec2_t = $('#section2').offset().top + $('#section2').height() + 200;
	if(win > sec2_t ){
		$('#section2').addClass("on");
	}else{
		$('#section2').removeClass("on");
	}
})


$(window).scroll(function(){
    let scr = $(document).scrollTop();
    let sec3_t = $("#section3").offset().top;

    //section3 horizontal scroll
    let offset = scr - sec3_t

    if (scr > sec3_t) {
        $("#section3 .project-wrap").css({ left: -offset });
    }
});