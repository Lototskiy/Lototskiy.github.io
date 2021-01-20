if (document.querySelector('.collection-slider')) {
    var swiper = new Swiper('.collection-slider .swiper-container', {
        slidesPerView: 2,
        speed: 1000,
        autoHeight: true,
        spaceBetween: 10,
        grabCursor: true,
    });
}