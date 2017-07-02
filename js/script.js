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
	$('li a').click(function(){
		$('.nav__list').removeClass('open');
	});
});