class mainSlider {
	constructor(slider){
		this.sliderClass = slider;
		this.slideClass = slider+'__slide';
		this.slider = document.querySelector(slider);
		this.slidesCount = document.querySelectorAll(this.slideClass).length;
		this.interval = setInterval(function(){
			this.toNext();
		}.bind(this),7000);
	}

	get activeIndex() {
		return document.querySelector(this.slideClass+'--active').getAttribute('data-slide');
	}


	get nextSlide() {
		
		let needIndex = +(this.activeIndex) + 1;
		if ( needIndex > this.slidesCount) {
			needIndex = 1;
		}

		return document.querySelector(this.slideClass+'[data-slide="'+needIndex+'"]');
	}


	get activeSlide(){
		return document.querySelector(this.slideClass+'--active');

	}

	hideSlide(slide,nextSlide) {
		slide.classList.remove((this.slideClass+'--opacity1').substring(1));
		slide.classList.add((this.slideClass+'--opacity0').substring(1));
		let currClas = this.slideClass;
		function roundAnim(anim){
			slide.classList.remove((currClas+'--opacity0').substring(1));
			slide.classList.remove((currClas+'--active').substring(1));
			mainScreenSlider.showSlide(mainScreenSlider.showSlide(nextSlide));
			slide.querySelector('.slider__round2').removeEventListener('animationend', roundAnim);
		}
		slide.querySelector('.slider__round2').addEventListener('animationend', roundAnim);
	}

	showSlide(slide){
		slide.classList.add((this.slideClass+'--active').substring(1));
		raf(function(){
			slide.classList.add('slider__slide--opacity1');
		});
	}



	toNext(){
		clearInterval(this.interval);
		this.interval = setInterval(function(){
			this.toNext();
		}.bind(this),7000);
		let nextSlide = this.nextSlide;
		this.hideSlide(this.activeSlide, this.nextSlide);
	}



	toPrev(){
		console.log('prev slide');
	}

}


let mainScreenSlider = new mainSlider('.slider');

$('.slider__navigation-arrow--next').on('click', function() {
	mainScreenSlider.toNext();
});



$('.slider__navigation-arrow--prev').on('click', function() {
	mainScreenSlider.toNext();
});



function raf(fn) {
  window.requestAnimationFrame(function(){
    window.requestAnimationFrame(function(){

      fn();
    });
  });
}