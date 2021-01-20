if (document.querySelector('.rooms-slider')) {
    var swiper = new Swiper('.rooms-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 19,
        speed: 1000,
        autoHeight: true,
        // autoplay: {
        //     delay: 3000
        // },
        loop: true,
        navigation: {
            nextEl: '.rooms-slider .swiper-button-next',
            prevEl: '.rooms-slider .swiper-button-prev',
        },
    });
}