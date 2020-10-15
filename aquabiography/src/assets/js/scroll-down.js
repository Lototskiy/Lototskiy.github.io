$(function () {
  $('a[href*=#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });
});


// $(document).ready(function(){
//   $("#my__link").on("click", function (event) {
//       event.preventDefault();
//       var id  = $(this).attr('href'),
//           top = $(id).offset().top;
//       $('body,html').on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
//           $('body,html').stop();
//       });
//       $('body,html').animate({scrollTop: top}, 2500);
//   });
// })

