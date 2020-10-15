if ( document.querySelector('.sales__slider') ) {
	var salesSlider = new Swiper('.sales__slider .swiper-container', {
		speed: 400,
		spaceBetween: 23,
		autoHeight: true,
		slidesPerView: 3,
		navigation: {
			nextEl: '.sales__slider .swiper-button-next',
			prevEl: '.sales__slider .swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 3,
			},
			
		}
	});
}