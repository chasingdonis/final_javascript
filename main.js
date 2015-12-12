$("document").ready(function (){
$( "#nav a" ).hover(
  function() {
    $( this ).not( "#home" ).append( $( "<span> work</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);
 
$( "nav" ).hover(function() {
  $( this ).addClass( "ani" );
});

$("#cui").hover(function(){
    $(this).animate({ marginLeft: "120px" });
    }, function() {
    $(this).animate({ marginLeft: "-10px" });
});

$( "h4" ).hover(function() {
  $( this ).addClass( "ani" );
});
    
var par = $('.content');
  $(par).hide();

$( "h3" ).click(function() {
   $(par).slideToggle('slow');
   return false;
});
    
    
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
    
$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
$(".group1").colorbox({rel:'group2', transition:"fade"});
$(".group2").colorbox({rel:'group2'});
$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
$(".inline").colorbox({inline:true, width:"50%"});
$(".callbacks").colorbox({
	onOpen:function(){ alert('onOpen: colorbox is about to open'); },
	onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
	onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
	onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
	onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
	});


$("#click").click(function(){ 
$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
});