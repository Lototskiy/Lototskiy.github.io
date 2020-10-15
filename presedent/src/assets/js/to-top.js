var toTop = $('#to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    toTop.addClass('to-top--show');
  } else {
    toTop.removeClass('to-top--show');
  }
});

toTop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '1000');
});