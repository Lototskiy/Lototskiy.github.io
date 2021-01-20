if (document.querySelector('.best-offers-slider')) {
    var swiper = new Swiper('.best-offers-slider .swiper-container', {
        slidesPerView: 2,
        speed: 1000,
        loop: true,
        autoHeight: true,
        spaceBetween: 5,
        grabCursor: true,
    });
}