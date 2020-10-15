if (document.querySelector('.project-slider')) {
	let interleaveOffset = 0.5;
	let portfolioSliderSelector1 = '.project-slider .swiper-container';
	let portfolioSliderOptions1 = {
		initialSlide: 1,
		slidesPerView: 1,
		loopedSlides: 4,
		centeredSlides: true,
		speed: 1000,
		autoHeight: true,
		spaceBetween: 60,
		grabCursor: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.project-slider__button-next',
			prevEl: '.project-slider__button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,   
		  },
		breakpoints: {
			320: {
				spaceBetween: 20,
			},

			1200: {
				spaceBetween: 60,
				scrollbar: {
					el: '.projects__slider-btns .swiper-scrollbar',
					draggable: true,
				},
			}
		},
		on: {
			init: function () {
				for (let i = 0; i < this.slides.length + 1; i++) {
					let div = document.createElement('div');
					document.querySelector('.swiper-scrollbar-wrap').append(div);
				}
				setTimeout(function(){
					this.update();
				}.bind(this),1000);
			},
			progress: function () {
				let swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					let slideProgress = swiper.slides[i].progress,
						innerOffset = swiper.width * interleaveOffset,
						innerTranslate = slideProgress * innerOffset;

					swiper.slides[i].querySelector(".slide-bgimg").style.transform =
						"translateX(" + innerTranslate + "px)";
				}
			},
			touchStart: function () {
				let swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition: function (speed) {
				let swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".slide-bgimg").style.transition =
						speed + "ms";
				}
			}
		}
	};

	document.portfolioSlider1 = new Swiper(portfolioSliderSelector1, portfolioSliderOptions1);
	console.log(document.portfolioSlider1);
};