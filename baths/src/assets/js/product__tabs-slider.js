if (document.querySelector('.product__info')) {
    var swiper = new Swiper('.product__tabs-slider .swiper-container', {
        slidesPerView: 2,
        speed: 1000,
        loop: true,
        autoHeight: true,
        spaceBetween: 12,
        grabCursor: true,
    });
}