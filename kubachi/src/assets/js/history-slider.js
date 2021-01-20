if (document.querySelector('.history-slider')) {
    var swiper = new Swiper('.history-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        autoHeight: true,
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
            el: '.history-slider .swiper-pagination',
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