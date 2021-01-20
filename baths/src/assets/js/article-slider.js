if (document.querySelector('.articles-slider')) {
    var swiper = new Swiper('.articles-slider .swiper-container', {
        slidesPerView: 1,
        initialSlide: 1,
        speed: 1000,
        loop: true,
        autoHeight: true,
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
			el: '.articles-slider .swiper-pagination',
			clickable: true,
		},
    });
}