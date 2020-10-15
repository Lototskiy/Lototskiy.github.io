$ (document).ready( function(){
	
	window.allow = true;

	$('.toogles__item-title').on('click', function(){
		if ( window.allow ) {

			window.allow = false;

			if ( typeof $(this).attr('data-toogles') !== typeof undefined && $(this).attr('data-toogles') !== false) {
				var need =  $(this).closest('.toogles__wrap').find('.toogles__item[data-toogles="'+$(this).attr('data-toogles')+'"]');
				console.log(need);
			} else {
				var need =  $(this).closest('.toogles__item');
			}
			var need_t =  $(this);
			var need_c =  need.find('.toogles__item-content');

			if ( need.hasClass('toogles__item--active') ) {
				$(need_c).slideToggle(500,function(){
					$(need).removeClass('toogles__item--active');
					window.allow = true;
				});
			} else {

				if ( document.querySelector('.toogles__item--active') ) {

					var need2 =  $('.toogles__item--active').closest('.toogles__item');
					var need_t2 =  $('.toogles__item--active .toogles__item-title');
					var need_c2 =  $('.toogles__item--active .toogles__item-content');

					$(need_c2).slideToggle(500,function(){
						$(need2).removeClass('toogles__item--active');

						$(need_c).slideToggle(500,function(){
							$(need).addClass('toogles__item--active');
							window.allow = true;
						});

					});

				} else {
					$(need_c).slideToggle(500,function(){
						$(need).addClass('toogles__item--active');
						window.allow = true;
					});

				}

			}

		}

	});
});