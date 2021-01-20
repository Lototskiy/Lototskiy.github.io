if (document.querySelector('.reviews-video')) {
    var swiper = new Swiper('.reviews-video .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1000,
        autoHeight: true,
        loop: true,
        slidesPerGroup: 2,
        navigation: {
            nextEl: '.reviews-video .swiper-button-next',
            prevEl: '.reviews-video .swiper-button-prev',
        },
        pagination: {
            el: '.reviews-video .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            1025: {
                slidesPerView: 4,
                slidesPerGroup: 2,
            },
        }
    });
}