if (document.querySelector('.building-slider')) {
	var swiper = new Swiper('.building-slider .swiper-container', {
		initialSlide: 1,
		slidesPerView: 1,
		loopedSlides: 4,
		centeredSlides: true,
		speed: 1000,
		autoHeight: true,
		grabCursor: true,
		watchSlidesProgress: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}