if (document.querySelector('.history-slider')) {
	var swiper = new Swiper('.history-slider .swiper-container', {
		slidesPerView: 2,
		speed: 1000,
		loop: true,
		autoHeight: true,
		spaceBetween: 5,
		grabCursor: true,
	});
}