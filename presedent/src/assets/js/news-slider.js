if ( document.querySelector('.news-slider__slider') ) {
var newsSlider = new Swiper('.news-slider__slider .swiper-container', {
    speed: 400,
    spaceBetween: 20,
    autoHeight: true,
    slidesPerView: 3,
     navigation: {
    nextEl: '.news-slider__slider .slider-btns__btn--next',
    prevEl: '.news-slider__slider .slider-btns__btn--prev',
  },

    breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  }
});

}