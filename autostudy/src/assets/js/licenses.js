if (document.querySelector('.licenses__slider')) {
	let interleaveOffset = 0.5;
	let portfolioSliderSelector1 = '.licenses__slider .swiper-container';
	let portfolioSliderOptions1 = {
		// loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		// loopedSlides: 2,
		centeredSlides: true,
		speed: 1000,
		// autoplay: {
		// 	delay: 3000
		// },
		autoHeight: true,
		grabCursor: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.licenses__slider .swiper-button-next',
			prevEl: '.licenses__slider .swiper-button-prev',
		},
	};

	document.portfolioSlider1 = new Swiper(portfolioSliderSelector1, portfolioSliderOptions1);

};