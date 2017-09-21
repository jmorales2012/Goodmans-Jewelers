$(function() {
  $('.toggleNav').on('click',function() {
    $('.flex-nav ul').toggleClass('open');
  });
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.flex-nav').addClass("sticky");
  }
  else{
    $('.flex-nav').removeClass("sticky");
  }
});

