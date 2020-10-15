class scrollApp {
	
	constructor(animations) {
		
		this.animations = document.querySelectorAll(animations);
		this.scrolls = this.generateScrolls();
		this.checkScroll();


		if( document.querySelector('body').clientWidth < 1270 ) {

			window.addEventListener("touchmove", this.checkScroll.bind(this));
			let mobileDelay = document.querySelectorAll('[data-animation-mobile-delay]');
			for (var i = 0; i < mobileDelay.length; i++) {
				mobileDelay[i].removeAttribute('data-animation-delay');
			}
			
		}

			window.addEventListener('scroll', this.checkScroll.bind(this));

	}

	get nowScrollTop() {
			return document.querySelector('body').scrollTop;
	}



	generateScrolls() {
		let scrolls = [];

		for (var i = 0; i < this.animations.length; i++) {
			this.animations[i].setAttribute('id', 'animations-' + i);

			let scroll = this.animations[i].getBoundingClientRect().top + this.animations[i].getBoundingClientRect().height;
			scroll -=  70;  //шаг полосы прокрутки

			if ( this.animations[i].getBoundingClientRect().height > ( document.querySelector('body').clientHeight * 0.4 )  ) {
				scroll -= this.animations[i].getBoundingClientRect().height - document.querySelector('body').clientHeight * 0.4;
			}

			if ( this.animations[i].getAttribute('data-animation-type') == "bottom"  ) {
				scroll += parseInt(getComputedStyle(this.animations[i]).bottom);	
			}

			if ( this.animations[i].getAttribute('data-animation-type') == "top"  ) {
				scroll += parseInt(getComputedStyle(this.animations[i]).top);	
			}

			scrolls[i] = {
				id: 'animations-' + i,
				hide: true,
				scroll: scroll,
			}
		}

		return scrolls;
	}
	

	checkScroll() {
		for (var i = 0; i < this.scrolls.length; i++) {
			if ( this.scrolls[i]['hide'] ) {
				if ( this.scrolls[i]['scroll']  < ( this.nowScrollTop + document.querySelector('body').clientHeight)   ) {
					this.scrolls[i]['hide'] = false;
					this.checkAnimation(this.scrolls[i]['id']);
				}
			}
		}
	}


		reScroll(rise) {
		for (var i = 0; i < this.scrolls.length; i++) {
				this.scrolls[i]['scroll'] -= rise;
		}
	}


	// startBlock(blockId, deep = 1){
	// 	let elements;
	// 	if ( deep == 1 ) {
	// 		elements = document.querySelector('#'+blockId).querySelectorAll('[data-animation-type]:not([data-animation-deep])');
	// 	} else {
	// 		elements = document.querySelector('#'+blockId).querySelectorAll(`[data-animation-deep="${deep}"]`);
	// 	}
	// 	for (var i = 0; i < elements.length; i++) {
	// 		this.checkAnimation(elements[i]);
	// 	}

	// 	deep++;

	// 	if ( document.querySelector('#'+blockId).querySelector(`[data-animation-deep="${deep}"]`) ) {
	// 		document.querySelector('#'+blockId).querySelector(`[data-animation-time="${deep-1}"]`).addEventListener('animationend', function(){
	// 			this.startBlock(blockId,deep);
	// 		}.bind(this));
	// 	}
	// }


	checkAnimation(elemId){
		let animation = "", animationDuration, animationDelay, animationType, elem;
		elem = document.querySelector('#'+elemId);
		
		if ( elem.hasAttribute('data-animation-deep') ) {
			let deep = elem.getAttribute('data-animation-deep');
			let deepParent = elem.closest('.animations').querySelector('[data-animation-time="' + ( deep - 1)  +'"]');
			if ( deepParent.classList.contains('animated') ) {
				this.startAnimation(elem);
			}	else {
				
				if ( deepParent.offsetParent === null ) {

					if ( elem.closest('.animations').querySelector('[data-animation-time2="' + ( deep - 1)  +'"]') ) {
						
						elem.closest('.animations').querySelector('[data-animation-time2="' + ( deep - 1)  +'"]').addEventListener('animationend', function(){
							this.startAnimation(elem);
						}.bind(this));

					}


				} else {

					deepParent.addEventListener('animationend', function(){
						this.startAnimation(elem);
					}.bind(this));

				}

			}		

		} else {
			this.startAnimation(elem);
		}
	}



	startAnimation(elem){

		let animation = "", animationDuration, animationDelay, animationType;
		

		animationType = elem.getAttribute('data-animation-type');
		
		elem.addEventListener('animationend', function(){
			this.classList.add('animated');
		});
		
		if ( animationType == "overlay" ) {
			this.animationOverlay(elem);
			return;
		} else if ( animationType == "typing" ) {
			this.animationTyping(elem);
			return;
		} else if ( animationType == "creative" ) {
			this.animationCreative(elem);
			return;
		}  else if ( animationType == "creative2" ) {
			this.animationCreative2(elem);
			return;
		}

		animation +=  animationType;

		if ( elem.hasAttribute('data-animation-duration') ) {
			animationDuration = elem.getAttribute('data-animation-duration')  + "ms";  
			animation += " " + animationDuration;
		} 

		if ( elem.hasAttribute('data-animation-delay') ) { 
			animationDelay = elem.getAttribute('data-animation-delay') + "ms";  
			animation += " linear " + animationDelay;
		} 


		elem.style.animation = animation;	
	}


	animationOverlay(elem){
		
		let animation = "", animationDuration, animationDelay,  animationType;
		
		animationType = elem.getAttribute('data-animation-type');

		animation += animationType;
		
		
		if ( elem.hasAttribute('data-animation-duration') ) {
			animationDuration = elem.getAttribute('data-animation-duration') + "ms";  
			animation += " " + animationDuration;
		} 


		if ( elem.hasAttribute('data-animation-delay') ) { 
			animationDelay = elem.getAttribute('data-animation-delay') + "ms";  
			animation += " linear " + animationDelay;
		} 

		if ( elem.hasAttribute('data-animation-color') ) { 
			elem.querySelector('.overlay').style.background = elem.getAttribute('data-animation-color');
		} else {
			if ( !elem.querySelector('.overlay') )  {
				console.log(elem);
			}
			elem.querySelector('.overlay').style.background = getComputedStyle(elem).color;
		}


		elem.style.animation = animation;


		// overlay add work
		elem.querySelector('.overlay').style.animation = "overlay2 " + animationDuration + " linear " + animationDuration;
	}




	animationTyping(elem) {


		let animation = "", animationDuration, animationDelay,  animationType, animationText, animationLetter, animationColor, animationStep;
		
		animationType = elem.getAttribute('data-animation-type');

		animation += animationType;

		// typing add work

		if ( elem.hasAttribute('data-animation-text') ) {
			animationText = elem.getAttribute('data-animation-text');  
		} 


		if ( elem.hasAttribute('data-animation-letter') ) {
			animationLetter = elem.getAttribute('data-animation-letter');  
		} 


		if ( elem.hasAttribute('data-animation-color') ) {
			animationColor = elem.getAttribute('data-animation-color');  
		} 


		if ( elem.hasAttribute('data-animation-step') ) {
			animationStep = elem.getAttribute('data-animation-step');  
		} 


		goTyping();
		function goTyping() {



			let j = 1; 
			elem.style.color = animationColor;
			for (let char of animationText) {

				setTimeout(function(){
					let curText = elem.innerHTML;
					let newText =  curText + char;
					elem.innerHTML = newText;
				}, j*animationStep)


				j++;
			}

			setTimeout(function(){

				elem.innerHTML = "";
				goTyping();
			}, ( j*animationStep ) + 3000 );

		}


	}


	animationCreative(elem) {
		let animation = "", animationDuration, animationDelay,  animationType, animationText, animationLetter, animationColor, animationStep;
		
		animationType = elem.getAttribute('data-animation-type');

		animation += animationType;

		// typing add work

		if ( elem.hasAttribute('data-animation-text') ) {
			animationText = elem.getAttribute('data-animation-text');  
		} 


		if ( elem.hasAttribute('data-animation-letter') ) {
			animationLetter = elem.getAttribute('data-animation-letter');  
		} 


		if ( elem.hasAttribute('data-animation-color') ) {
			animationColor = elem.getAttribute('data-animation-color');  
		} 


		if ( elem.hasAttribute('data-animation-step') ) {
			animationStep = elem.getAttribute('data-animation-step');  
		} 


		let j = 1; 
		elem.style.color = animationColor;
		for (let char of animationText) {

			if ( j == 8  ) {

				setTimeout(function(){
					let newText =  "CRE<em class='logo'><strong></strong>A<em>&</em>T</em>IVE";
					elem.innerHTML = newText;
				}, j*animationStep)

			} else {

				setTimeout(function(){
					let curText = elem.innerHTML;
					let newText =  curText + char;
					elem.innerHTML = newText;
				}, j*animationStep)

			}

			j++;
		}
	}


	animationCreative2(elem) {
		let animation = "", animationDuration, animationDelay,  animationType, animationText, animationLetter, animationColor, animationStep;
		
		animationType = elem.getAttribute('data-animation-type');

		animation += animationType;

		// typing add work

		if ( elem.hasAttribute('data-animation-text') ) {
			animationText = elem.getAttribute('data-animation-text');  
		} 


		if ( elem.hasAttribute('data-animation-letter') ) {
			animationLetter = elem.getAttribute('data-animation-letter');  
		} 


		if ( elem.hasAttribute('data-animation-color') ) {
			animationColor = elem.getAttribute('data-animation-color');  
		} 


		if ( elem.hasAttribute('data-animation-step') ) {
			animationStep = elem.getAttribute('data-animation-step');  
		} 


		goTyping();

		function goTyping() {
			let j = 1; 
			elem.style.color = animationColor;
			for (let char of animationText) {

				if ( j == 8  ) {

					setTimeout(function(){
						let newText =  "CRE<em class='logo'><strong></strong>A<em>&</em>T</em>IVE";
						elem.innerHTML = newText;
					}, j*animationStep)

				} else {

					setTimeout(function(){
						let curText = elem.innerHTML;
						let newText =  curText + char;
						elem.innerHTML = newText;
					}, j*animationStep)

				}

				j++;
			}

			setTimeout(function(){
				elem.innerHTML = "";
				goTyping();
			}, ( j*animationStep ) + 5000 );

		}
	}
}

document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function(){
		document.querySelector('body').scrollTo(0,0);
		window.animations1 = new scrollApp('[data-animation-type]');
	},1200)
});


