$(document).ready(function(){
	$('.nav-toggle').click(function(){
		$('.nav__list').toggleClass('open');
		$(this).toggleClass('open');

		if ($('.nav-toggle').is('.open')) {
			$(this).attr('aria-expanded', true);
		} else {
			$(this).attr('aria-expanded', false);
		}
	});
});


$(document).ready(function(){
	$('a[href^="#"]').click(function(e){
		e.preventDefault(); 

		var headerHeight = $('.header').outerHeight();
		var target = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $(target).offset().top - headerHeight,
		}, 1000);
		location.hash = target;
		$('.nav__list').removeClass('open');
		$('.nav-toggle').removeClass('open');
	});
});

$(document).on("scroll",function(){
    if($(document).scrollTop()>115){

        $("header").addClass("smallHeader");
    } else if($(document).scrollTop()<115){
    	$("header").removeClass("smallHeader");
    }
});


// $(document).ready(function(){
// 	$('.nav__link').click(function(e){
// 		$('.nav__link.active').removeClass('active');
// 		$(this).addClass('active');
// 	});
// });

$(document).ready(function (e) {
    $(document).on("scroll", function(){

    var headerHeight = $('.header').outerHeight();
    var scrollPosition = $(document).scrollTop();
    $('.nav__link').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top - headerHeight <= scrollPosition 
        	&& refElement.position().top + refElement.height() > scrollPosition) {
            $('ul li .nav__link').removeClass("active");
            currentLink.addClass("active");
        }
        // else{
        //     currentLink.removeClass("active");
        // }

   });
    });
});
