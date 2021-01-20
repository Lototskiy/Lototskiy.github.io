if (document.querySelector('.robots-slider')) {
    var swiper = new Swiper('.robots-slider--1 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 1,
        speed: 1000,
        // autoHeight: true,
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.robots-slider--1 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.robots-slider--1 .swiper-button-next',
            prevEl: '.robots-slider--1 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            1025: {
                slidesPerView: 3,
            },
        }
    });
    var swiper = new Swiper('.robots-slider--2 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 1,
        speed: 1000,
        // autoHeight: true,
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.robots-slider--2 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.robots-slider--2 .swiper-button-next',
            prevEl: '.robots-slider--2 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            1025: {
                slidesPerView: 3,
            },
        }
    });
    var swiper = new Swiper('.robots-slider--3 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 1,
        speed: 1000,
        // autoHeight: true,
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.robots-slider--3 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.robots-slider--3 .swiper-button-next',
            prevEl: '.robots-slider--3 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            1025: {
                slidesPerView: 3,
            },
        }
    });
}