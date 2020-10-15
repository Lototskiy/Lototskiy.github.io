if (document.querySelector('.categories-slider')) {
  var newsSlider = new Swiper('.categories-slider .swiper-container', {
    speed: 400,
    spaceBetween: 10,
    autoHeight: true,
    loop: true,
    slidesPerView: 6,
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
  });

}