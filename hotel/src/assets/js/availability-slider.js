if (document.querySelector('.availability-slider')) {
    var swiper = new Swiper('.availability-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 19,
        speed: 1000,
        // autoplay: {
        //     delay: 3000
        // },
        autoHeight: true,
        loop: true,
        navigation: {
            nextEl: '.availability-slider .swiper-button-next',
            prevEl: '.availability-slider .swiper-button-prev',
        },
    });
}