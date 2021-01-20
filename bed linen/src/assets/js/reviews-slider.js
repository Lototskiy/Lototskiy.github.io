if (document.querySelector('.reviews-slider')) {
    var swiper = new Swiper('.reviews-slider .swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function (number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },
    });
}