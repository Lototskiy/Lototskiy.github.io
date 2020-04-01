<<<<<<< HEAD
$(function(){
  $('.slider').slick({
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
  //WOW.JS
  new WOW().init();

   $('.header__btn').on('click', function () {
     $('.header__nav').slideToggle();
     $('.header__btn').toggleClass('active');
   });
});
=======
$(function(){
  $('.slider').slick({
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
  //WOW.JS
  new WOW().init();

   $('.header__btn').on('click', function () {
     $('.header__nav').slideToggle();
     $('.header__btn').toggleClass('active');
   });
});
>>>>>>> 4c002262aad30a5a83ad9103f31d641a9d78eb20
