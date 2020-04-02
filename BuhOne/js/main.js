$(function(){
  $('.slider').slick({
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    prevArrow: $('.hero__prev-arrow'),
    nextArrow: $('.hero__next-arrow')
  });

  $('.sliderClient').slick({
    dots: true,
    arrows: true,
    prevArrow: $('.client__prev-arrow'),
    nextArrow: $('.client__next-arrow')
  });
  $('.sliderReviews').slick({
    dots: true,
    arrows: true,
    prevArrow: $('.reviews__prev-arrow'),
    nextArrow: $('.reviews__next-arrow')
  });

  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('active__btn');
    $('.menu__nav').toggleClass('nav__active');
    $('.menu__contact').toggleClass('contact__active');
  });
});