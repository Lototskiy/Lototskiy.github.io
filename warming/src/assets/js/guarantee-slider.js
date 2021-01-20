if (document.querySelector('.guarantee-slider')) {
    var swiper = new Swiper('.guarantee-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        autoHeight: true,
        loop: true,
        navigation: {
            nextEl: '.guarantee-slider .swiper-button-next',
            prevEl: '.guarantee-slider .swiper-button-prev',
        },
    });
}