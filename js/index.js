$(document).ready(function() {
$("#prof5").click(function(){
$(".profile5").toggle(prof5);
});
$("#prof6").click(function(){
$(".profile6").toggle(prof6);
});
});
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
    $('.reach').addClass('reach2');
  } else {
    $('nav').removeClass('shrink');
    $('.reach').removeClass('reach2');
  }
});
$(document).on('click',function(e) {
    if( $(e.target).is('.navbar-collapse','ul','li','a') ) {
        $(this).hide();
    }
});

