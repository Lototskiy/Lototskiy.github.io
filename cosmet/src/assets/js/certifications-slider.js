if ( document.querySelector('.certifications-slider') ) {
window.sertsSwiper = new Swiper('.certifications-slider .swiper-container', {
	slidesPerView: 4,
	spaceBetween: 20,
	observer: true,
		observeParents: true,
	autoHeight: true,
	speed: 1000,
	loop: true,
	navigation: {
        nextEl: '.certifications-slider .swiper-button-next',
        prevEl: '.certifications-slider .swiper-button-prev',
	  },
	  breakpoints: {
			320: {
				slidesPerView: 1,
			},
			1201: {
				slidesPerView: 4,
			},
		}
  });
}