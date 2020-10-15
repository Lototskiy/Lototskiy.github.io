class socials {
	
	constructor(socials,blackBlocks) {
		this.socials = document.querySelector(socials);
		this.socialsTop = this.socials.getBoundingClientRect().top + ( this.socials.getBoundingClientRect().height / 2 );
		this.blackScrolls = this.generateScrolls(blackBlocks);
		this.checkScroll();
		window.addEventListener('scroll', this.checkScroll.bind(this));
	}

	generateScrolls(blackBlocks) {
		let blackScrolls = [];
		
		blackBlocks = blackBlocks.split(' ');
		for (let i = 0; i < blackBlocks.length; i++) {
			let blackBlock = document.querySelectorAll(blackBlocks[i]);
			for (let j = 0; j < blackBlock.length; j++) {

			let scroll = blackBlock[j].getBoundingClientRect().top;
			let height = blackBlock[j].getBoundingClientRect().height;

			blackScrolls.push({
				scroll: scroll,
				height: height,				
			});
		}
	}

	return blackScrolls;
}


checkScroll() {
	let whiteSocial = false; 
	for (var i = 0; i < this.blackScrolls.length; i++) {
		if (  this.blockTop( this.blackScrolls[i]['scroll'] ) && (  this.blockBottom( this.blackScrolls[i]['scroll'], this.blackScrolls[i]['height']  )   ) ) {
			whiteSocial = true; 
		}
	}

	if ( whiteSocial ) {
		this.socials.classList.remove('social--black');
	} else {
		this.socials.classList.add('social--black');
	}
}


blockTop(elemScroll) {
	if ( document.querySelector('body').scrollTop + this.socialsTop >  elemScroll ) {
		return true;
	} else {
		return false;
	}
}


blockBottom(elemScroll, elemHeight) {
	if ( document.querySelector('body').scrollTop + this.socialsTop <  elemScroll + elemHeight  ) {
		return true;
	} else {
		return false;
	}
}



}


document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function(){
		window.socials = new socials('.social--fixed','.hero .author .numbers .job .reviews .contact .last-news');
	},5000)
});