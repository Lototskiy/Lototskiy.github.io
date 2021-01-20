if (document.querySelector('.materials-slider')) {
    var swiper = new Swiper('.materials-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        // autoHeight: true,
        loop: true,
        navigation: {
            nextEl: '.materials-slider .swiper-button-next',
            prevEl: '.materials-slider .swiper-button-prev',
        },
    });
}