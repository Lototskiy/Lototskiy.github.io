if ( document.querySelector('.footer__bag') ) {
	document.querySelector('.footer__bag').addEventListener('mouseenter', function(){
		document.querySelector('#scrollbar').classList.add('scrollbar--footer');
	});
	document.querySelector('.dark-section--footer').addEventListener('mouseleave', function(){
		document.querySelector('#scrollbar').classList.remove('scrollbar--footer');
	});
	// setTimeout(function(){
		
	// window.scrollbar.addListener(function(){
	// 	document.querySelector('#scrollbar').classList.remove('scrollbar--footer');
	// });
	// },500);
}