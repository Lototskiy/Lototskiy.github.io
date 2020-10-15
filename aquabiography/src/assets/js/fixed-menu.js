let header = document.querySelector('.header');

if( document.querySelector('body').clientWidth > 1270 ) {

	setTimeout(function(){

		scrollbar.addListener(checkFixed);

	},1200);

} else {
	document.addEventListener('scroll', checkFixedMobile);
}

function checkFixed(){
	let scroll = scrollbar.scrollTop;
	if ( scroll > 200 & !header.classList.contains('header--fixed') ) {
		headerFix();
	} else if ( scroll < 200 &  header.classList.contains('header--fixed') ){
		headerStatic();
	}
}


function checkFixedMobile(){
	let scroll = document.querySelector('body').scrollTop;
	if ( scroll > 200 & !header.classList.contains('header--fixed') ) {
		headerFix();
	} else if ( scroll < 200 &  header.classList.contains('header--fixed') ){
		headerStatic();
	}
}



function headerFix() {
	header.classList.add('header--fixed');
}

function headerStatic() {
	header.classList.add('header--height0');
	function headerRemoveFix() {
		
		header.classList.remove('header--fixed');
		header.classList.remove('header--height0');
		header.removeEventListener('animationend', headerRemoveFix)
	}
	header.addEventListener('animationend', headerRemoveFix)
}
