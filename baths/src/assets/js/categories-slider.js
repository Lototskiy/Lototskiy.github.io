if (document.querySelector('.categories-slider')) {
	var swiper = new Swiper('.categories-slider .swiper-container', {
		slidesPerView: 2,
		speed: 1000,
		loop: true,
		autoHeight: true,
		spaceBetween: 5,
		grabCursor: true,
	});
}