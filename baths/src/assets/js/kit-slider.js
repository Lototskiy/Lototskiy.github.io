if (document.querySelector('.kit')) {
    var swiper = new Swiper('.kit .swiper-container', {
        slidesPerView: 2,
		speed: 1000,
		loop: true,
		autoHeight: true,
		spaceBetween: 10,
		grabCursor: true,
    });
}