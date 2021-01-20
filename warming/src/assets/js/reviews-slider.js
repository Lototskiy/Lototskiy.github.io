if (document.querySelector('.reviews-slider')) {
    var swiper = new Swiper('.reviews-slider .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1000,
        autoHeight: true,
        // loop: true,
        navigation: {
            nextEl: '.reviews-slider .swiper-button-next',
            prevEl: '.reviews-slider .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            1025: {
                slidesPerView: 4,
            },
        }

    });
}