if (document.querySelector('.products-slider')) {
    var newsSlider = new Swiper('.products-slider .swiper-container', {
      speed: 400,
      spaceBetween: 10,
      autoHeight: true,
      loop: true,
      slidesPerView: 1,
    });
  
  }