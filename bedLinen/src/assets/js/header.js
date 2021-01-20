let header = document.querySelector('.header');

document.addEventListener('scroll', function () {
	let scroll = document.querySelector('body').scrollTop;
	console.log(scroll);
	if (scroll > 200 & !header.classList.contains('header--fixed')) {
		headerFix();
	} else if (scroll < 200 & header.classList.contains('header--fixed')) {
		headerStatic();
	}

});



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