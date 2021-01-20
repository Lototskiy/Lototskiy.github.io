if (document.querySelector('.product-slider')) {
    var swiper = new Swiper('.product-slider .swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        speed: 1000,
        autoHeight: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}