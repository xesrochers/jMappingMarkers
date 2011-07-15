/*
 * jMappingMarkers v1.4.0
 *    jQuery plugin to create the HTML nodes for the jMapping plugin 
 *    using Javascript arrays.
 *
 * Copyright (c) 2009-2010 xesroche
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 *
 * USAGE:
 * Define an array of markers as follows:
 * 
 	// latitude, longitude, title, directions, details,  img,  url 
	//   *directions - optional - text that displays a "directions" link google maps
	//   *details - optional - description displayed in the popup (under a <p> tag)
	//   *img - optional - image displayed in the popup (under a <img> tag)
	//   *url - optional - url link displayed in the popup (under a <a> tag)

	var food = [
	[37.8574888, -122.2678847, "Berkeley Bowl"],
	[37.8574888, -122.4391131, "Nopalito", "The best authentic Mexican restaurant in San Francisco"]
	];
	var tourism = [
		[37.809377,-122.410097, "Pier 39", null, "http://mw2.google.com/mw-panoramio/photos/square/551207.jpg"],
		[37.8042096, -122.4481651, "Exploratorium", null, null, "http://vigetlabs.github.com/jmapping/" ]
	];
	
	// Create the HTML markup from the JS arrays	
	$('#map-side-bar').jMappingMarkers("Food", food);
	$('#map-side-bar').jMappingMarkers("Tourism", tourism);
	
	// Now call the jMapping part
	$('#map').jMapping();
		
 */

jQuery.jMappingMarkersMid = 0;
jQuery.fn.jMappingMarkers = function(markers, title) {
	
	if (title != null) $("<h1></h1>").text(title).appendTo(this);
	var generateMarkerMarkup = function (oid, cat, marker) {
		var i = 0;
		var lat = marker[i++];
		var lng = marker[i++];
		var title = marker[i++];
		var directions = (i <marker.length) ? marker[i++] : null;
		var details = (i <marker.length) ? marker[i++] : null;
		var img = (i <marker.length) ? marker[i++] : null;
		var url = (i <marker.length) ? marker[i++] : null;

		var data = "{id:" + jQuery.jMappingMarkersMid++ + ", point: {lat: " + lat + ", lng: " + lng + "}, category: '" + cat + "'}";
		var map = $("<div></div>").addClass("map-location").attr("data-jmapping", data).appendTo(oid);
		var info = $("<div></div>").addClass("info-box").appendTo(map);
		$("<a></a>").addClass("map-link").attr("href", "#").html(title).appendTo(map);
		$("<h1></h1>").html(title).appendTo(info);
		if (img != null) $("<img></img>").attr("src", img).attr("alt","title").appendTo(info);
		if (details != null) $("<p></p>").html(details).appendTo(info);
		if (url != null) $("<a></a>").attr("href", url).attr("target", "_blank").text(url).appendTo(info);
		if (directions != null) {
			var google = "http://maps.google.com/maps?z=15&q=" + lat + "," + lng;
			$("<a></a>").attr("href", google).attr("target", "_blank").text(directions).appendTo(info);
		}
	}

	for (var i=0; i < markers.length; i++) {
		generateMarkerMarkup(this, title, markers[i]);
	}
	
		
};

