+ (function($) {
	'use strict';

	var All_Panels = $('.accordion > dd').hide();
	All_Panels.first().slideDown(300);

	$('.accordion > dt > a').first().addClass('active');
	$('.accordion > dt > a').click(function(){

		var current = $(this).parent().next('dd');

		$('.accordion > dt > a').removeClass('active');
		$(this).addClass('active');

		All_Panels.not(current).slideUp(300);
		$(this).parent().next().slideDown(300);

		return false;

	});

	var All_Toggles = $('.toggle > dd').hide();
	
	$('.toggle > dt > a').click(function(){
	
	    if ($(this).hasClass('active')) {
	    
	        $(this).parent().next().slideUp(300);
	        $(this).removeClass('active');
	        
	    }
	    else {
	        var current = $(this).parent().next('dd');
	        $(this).addClass('active');
	        $(this).parent().next().slideDown(300);
	    }
	    
	    return false;
	});

})(jQuery);