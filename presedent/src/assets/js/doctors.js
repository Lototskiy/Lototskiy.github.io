var mySwiper = new Swiper('.doctors__slider .swiper-container', {
	speed: 400,
	spaceBetween: 20,
	autoHeight: true,
	slidesPerView: 4,
	navigation: {
		nextEl: '.slider-btns__btn--next',
		prevEl: '.slider-btns__btn--prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		// 850: {
		// 	slidesPerView: 2,
		// },
		1200: {
			slidesPerView: 3,
		},

		1550: {
			slidesPerView: 4,
		},
	}

});