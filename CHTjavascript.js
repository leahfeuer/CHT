
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

});

//if javascript is active, set div height really big, else default to regular

var contentHeight = $(".main").height();
var fullHeight = $(window).height(); 
var marginHeight = (fullHeight-contentHeight)/2;


var divheight = function () {
if(fullHeight>contentHeight) {
$(".full-height").css( "height" , fullHeight-150);
//$(".vertmiddle").css( "margin-top", marginHeight);
}
//not sure if else statement is correct to set class height back to auto
//if I want to maintain zurb styling for height - ex. do they do anything for small screens? --
//make a new class for 1000px and then just add fullheight and remove 1000px class 
else{
$(".full-height").css( "height" , "auto");
}};

//HELP
/*
var styleNav = function () {
  $(window).scroll(function (){
    if ($(this).scrollTop () > fullHeight){
      nav.addClass("whitegreen");
    } else {
      nav.removClass("whitegreen");
    }
  });
};*/

var navcolor = function (){
  var nav = $('.mynav');
  if ($(this).scrollTop () > fullHeight-160){
      nav.addClass("whitebkgrd");
    } else {
      nav.removeClass("whitebkgrd");    
    }
  };

function initialize() {
  var styles =[
  {
    stylers:[
      {hue: '#9ECFCA'}
    ]
  }];

   // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng = new google.maps.LatLng(40.6932942,-73.9908107);
  var mapOptions = {
    center: myLatlng, 
    zoom: 16
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), 
    mapOptions);

 var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Cobble Hill Therapy'});
//Associate the styled map with the MapTypeId and set it to display.

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  };
  


$(document).ready( function (){
  divheight ();
  navcolor ();
  google.maps.event.addDomListener(window, 'load', initialize);
});

$(window).resize( function (){
  divheight ();
});

$(window).scroll( function (){
  navcolor ();
});



/*$(document).ready( function (){
  divheight ();
});

$(document).ready( function (){
 var nav = $('.mynav');
 $(window).scroll(function (){
    if ($(this).scrollTop () > fullHeight-160){
      nav.addClass("whitebkgrd");
     

    } else {
      nav.removeClass("whitebkgrd");
    
     
    }
  });
});*/







/*
{
  // specify the class used for active sections
  active_class: 'active',
  // how many pixels until the magellan bar sticks, 0 = auto
  threshold: 0,
  // pixels from the top of destination for it to be considered active
  destination_threshold: 20,
  // calculation throttling to increase framerate
  throttle_delay: 50 
}*/

/*(window).bind("load", function () {
    var footer = $("#footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});*/





/*function resizeElementHeight(element) {
  var height = 0;
  var body = window.document.body;
  if (window.innerHeight) {
      height = window.innerHeight;
  } else if (body.parentElement.clientHeight) {
      height = body.parentElement.clientHeight;
  } else if (body && body.clientHeight) {
      height = body.clientHeight;
  }
  element.style.height = ((height - element.offsetTop) + "px");
}
*/