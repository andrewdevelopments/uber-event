+ (function($) {
	'use strict';

	var Tabs = $('.tabs'),
		Triggers = Tabs.children().children('a'),
		Tabs_Content = Tabs.parent().children('.tabs-content'),
		Timeline = Tabs_Content.children('.tab').children('.timeline');

	if( Tabs.length >= 1 && Tabs_Content.length >= 1  ) {
		Tabs.each(function() {
			Triggers.on('click', function(event) {

				event.preventDefault();
				var target = $(this).attr('href');

				Triggers.removeClass('active');
				$(this).addClass('active');

				Tabs_Content.children().removeClass('active');
				$(target).addClass('active');

			});
		});
	}

	if( Timeline.length >= 1 ) {
		Timeline.each(function() {

			var That = $(this),
				That_Childrens = That.children('li');

			That_Childrens.on('click', function(event) {

				event.preventDefault();
				var target = $(this).attr('data-target');

				That_Childrens.removeClass('active');
				$(this).addClass('active');

				if( target ) {
					$(this).parent().parent().children('.lvl2-tabs').removeClass('active');
					$('#' + target).addClass('active');
				}
				else {
					$(this).addClass('no-target');
				}

			});
		});
	}

})(jQuery);