if ( document.querySelector('.reviews__slider') ) {
	var reviewsSlider = new Swiper('.reviews__slider .swiper-container', {
		speed: 400,
		spaceBetween: 15,
		autoHeight: true,
		slidesPerView: 2,
		navigation: {
			nextEl: '.reviews__slider .slider-btns__btn--next',
			prevEl: '.reviews__slider .slider-btns__btn--prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 2,
			}
		}
	});

}