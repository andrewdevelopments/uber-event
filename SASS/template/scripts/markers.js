/* global document */
jQuery(document).ready(function(){

	/***
	Adding Google Map.
	***/

	/* Calling goMap() function, initializing map and adding markers. */
	jQuery('#map').goMap({
		maptype: 'ROADMAP',
        latitude: 40.760651, 
        longitude: -73.930635, 
        zoom: 13,
        scaleControl: true,
        scrollwheel: false,
		markers: [
			{
				latitude: 38.83881,
				longitude: -77.09574,
				group: 'conference',
				icon: 'images/markers/marker-conference.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Conference #1</h3> <img src="images/event-page/event-image.jpg" class="image-responsive" /> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-cover.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.83144, 
				longitude: -77.10016, 
				group: 'conference', 
				icon: 'images/markers/marker-conference.png', 
				html: {
					content: '<div class="custom-infowindow active"><h3>Conference #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-cover.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.82644,
				longitude: -77.09009,
				group: 'conference',
				icon: 'images/markers/marker-conference.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Conference #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-cover.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.82104,
				longitude: -77.12054,
				group: 'seminars',
				icon: 'images/markers/marker-seminars.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-cover.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.81931,
				longitude: -77.11796,
				group: 'seminars',
				icon: 'images/markers/marker-seminars.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-cover.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.82140,
				longitude: -77.11489,
				group: 'seminars',
				icon: 'images/markers/marker-seminars.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-cover.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.82433,
				longitude: -77.07726,
				group: 'press',
				icon: 'images/markers/marker-pressconference.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-video.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.82027,
				longitude: -77.07000,
				group: 'press',
				icon: 'images/markers/marker-pressconference.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-video.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.82827,
				longitude: -77.05673,
				group: 'product',
				icon: 'images/markers/marker-productlaunch.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-countdown.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.83748,
				longitude: -77.05912,
				group: 'fundraising',
				icon: 'images/markers/marker-fundraising.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-fundraising.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.83631,
				longitude: -77.05416,
				group: 'fundraising',
				icon: 'images/markers/marker-fundraising.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-fundraising.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.86281,
				longitude: -77.06007,
				group: 'vip',
				icon: 'images/markers/marker-vip.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-parallax.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.86468,
				longitude: -77.05184,
				group: 'vip',
				icon: 'images/markers/marker-vip.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-parallax.html">Read More</a></div>'
				}
			},
			{
				latitude: 38.87908,
				longitude: -77.06909,
				group: 'vip',
				icon: 'images/markers/marker-vip.png',
				html: {
					content: '<div class="custom-infowindow active"><h3>Seminar #1</h3> <p>87540 North Main Street, New York, NY 98139</p> <p>Phone: 1-800-555-9172</p> <a href="event-page-parallax.html">Read More</a></div>'
				}
			}
		]
	});

	for (var i in $.goMap.markers) {
		if (this[i] !== 0) {
			$.goMap.showHideMarker(jQuery.goMap.markers[i], false);
		}
	}

	$.goMap.showHideMarkerByGroup('conference', true);

	jQuery('.map-filters ul li a').click(function(event) {
		event.preventDefault();
		var markerGroup = jQuery(this).attr('id');
		jQuery('.map-filters ul li').removeClass('active');
		jQuery(this).parent().addClass('active');
		for (var i in jQuery.goMap.markers) {
			if (this[i] !== 0) {
				jQuery.goMap.showHideMarker(jQuery.goMap.markers[i], false);
			}
		}
		jQuery.goMap.showHideMarkerByGroup(markerGroup, true);
	});

});