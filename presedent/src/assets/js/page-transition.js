function showPage(){
	$('.page-trans').removeClass('-page-trans--ph');
}


function hidePage(){
	$('.page-trans').addClass('page-trans--ph');
}



$(document).ready(function(){
	showPage();
	$(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto']):not([data-page-trans='false']):not([target='_blank'])", function(e) {
		e.preventDefault();
		hidePage();
		var self = this;
		setTimeout(function () {
			window.location.href = $(self).attr("href");
		}, 1200);
	});
});

