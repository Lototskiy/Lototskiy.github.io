$(function(){
  // header
 $('.header_slider').slick({
  infinite:true,
  fade:true,
  prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="Стрелочка">',
  nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt="Стрелочка">',
  asNavFor: '.slider-dotshead',
 });
 $('.slider-dotshead').slick({
   slidesToShow: 4,
   slidesToScroll: 4,
   asNavFor: '.header_slider',
 });
  // .surf
  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="Стрелочка">',
    nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt="Стрелочка">',
    asNavFor: '.slider-map',
  });
  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
  });
  // .travel
  $('.travel_slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="Стрелочка">',
    nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt="Стрелочка">',
  });

});