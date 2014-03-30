
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

});


var contentHeight = $(".content").height();
var fullHeight = $(window).height(); 
if(fullHeight>contentHeight) {
$(".full-height").css( "height" , fullHeight);
}



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