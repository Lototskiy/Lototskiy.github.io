let MenuAllow = true;
$('.services-menu__nav-item').on('mouseenter', function(){
	if ( MenuAllow ) {
		MenuAllow = false;
		let needServices = $(this).attr('data-services-tab');
		if ( document.querySelector('.services-menu__tab--active') ) {

			$('.services-menu__tab--active').fadeOut(300, function(){
				$(this).removeClass('services-menu__tab--active');
				servicesItemShow(needServices);
			});

		} else {
			servicesItemShow(needServices);
		}

	} 
});


$('.services-menu').on('mouseleave', function(){
	$('.services-menu__tab--active').fadeOut(300, function(){
		$(this).removeClass('services-menu__tab--active');
	});
});




function servicesItemShow(needServices) {
	$('.services-menu__tab[data-services-tab="'+needServices+'"]').addClass('services-menu__tab--active')
	$('.services-menu__tab[data-services-tab="'+needServices+'"]').css("display", "flex").fadeIn(300);
	MenuAllow = true;
}