if ( document.querySelector('.faq') ) {
	window.allow = true;
	$(document).ready(function(){
		$('.faq__item .faq__item-title').on('click', function(){
			if ( window.allow ) {
				window.allow = false;
				var need =  $(this).closest('.faq__item');
				var need_t =  $(this);
				var need_c =  need.find('.faq__item-text');

				if ( need.hasClass('faq__item--active') ) {
					$(need_c).slideToggle(500,function(){
						$(need).removeClass('faq__item--active');
						window.allow = true;
					});
				} else {
					if ( document.querySelector('.faq__item--active') ) {

						var need2 =  $('.faq__item--active').closest('.faq__item');
						var need_t2 =  $('.faq__item--active .faq__item-title');
						var need_c2 =  $('.faq__item--active .faq__item-text');

						$(need_c2).slideToggle(500,function(){
							$(need2).removeClass('faq__item--active');

							$(need_c).slideToggle(500,function(){
								$(need).addClass('faq__item--active');
								window.allow = true;
							});

						});

					} else {

						$(need_c).slideToggle(500,function(){
							$(need).addClass('faq__item--active');
							window.allow = true;
						});

					}

				}

			}

		});
	});
}