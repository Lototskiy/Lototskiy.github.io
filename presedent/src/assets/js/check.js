if ( document.querySelector('.inputs__accept-check') ) {
	$('.inputs__accept-check').on('click', function(){
		this.closest('.inputs__accept').classList.toggle('inputs__accept--active');
	});
}