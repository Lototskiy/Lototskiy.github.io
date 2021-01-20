if (document.querySelector('.product__slider')) {
    var swiper = new Swiper('.product__slider .swiper-container', {
        slidesPerView: 3,
        initialSlide: 1,
        spaceBetween: 17,
        centeredSlides: true,
        speed: 1000,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                direction: 'horizontal',
                pagination: {
                    el: '.product__slider .swiper-pagination',
                    clickable: true,
                },
            },
            1024: {
                slidesPerView: 3,
                direction: 'vertical',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
        },
    });
}