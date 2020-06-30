(function($) {
	'use strict';

	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});

	$('a[href^="#"]').on('click', function(event) {
	    event.preventDefault();

	    var target = this.hash,
	    	$target = $(target);

	    	$('html, body').stop().animate({
	    	    'scrollTop': $target.offset().top
	    	});
	});

})(jQuery);