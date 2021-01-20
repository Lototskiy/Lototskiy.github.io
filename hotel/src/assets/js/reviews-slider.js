if (document.querySelector('.reviews-slider')) {
    var swiper = new Swiper('.reviews-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        autoHeight: true,
        // autoplay: {
        //     delay: 3000
        // },
        loop: true,
        navigation: {
            nextEl: '.reviews-slider .swiper-button-next',
            prevEl: '.reviews-slider .swiper-button-prev',
        },
    });
}