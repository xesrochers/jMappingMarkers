*****************************************************************
* jMappingMarkers v1.4.0
* 
* jQuery plugin to create the HTML nodes for the jMapping plugin 
* using Javascript arrays.
*
* Copyright (c) 2009-2010 xesroche
* MIT License: http://www.opensource.org/licenses/mit-license.php
******************************************************************

Use this plugin in conjuction with the jmapping plugin (from http://vigetlabs.github.com/jmapping/)

I wrote this plugin as I needed to maintain a large amount of markers. This plugin generates the 
marker markup required for the jmapping plugin.

Simply define longitude/latitude/name array as depicted below


  var food = [
    [37.8574888, -122.2678847, "Berkeley Bowl"],
    [37.8574888, -122.4391131, "Nopalito"]
  ];

  $('#map-side-bar').jMappingMarkers("Food", food);
  $('#map').jMapping();

Other options exit (in the array) ... see the jmapping.markers.js plugin file header for more details!

Good Mapping!

/xesroche