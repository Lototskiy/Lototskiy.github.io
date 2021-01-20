$('.anchors a:not([data-anchors]), .scroll-down').on("click", function(e){
    e.preventDefault();
    var elementid = $(this).attr("href");
    if( document.querySelector('body').clientWidth > window.LARGE_TABLET ) {
        var destination = $("#"+elementid).offset().top + scrollbar.scrollTop;
        scrollbar.scrollTo(0,destination,1500,function(){
            window.hideMenu();
            window.animations1.checkScroll();
        });
    } else {
        var destination = $("#"+elementid).offset().top;
        $(window.SCROLL_EL).animate({
            scrollTop: destination}, 1500, function(){
                window.hideMenu();
                window.animations1.checkScroll();
            });
    }
});