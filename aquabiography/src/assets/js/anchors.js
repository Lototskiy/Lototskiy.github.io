let headerHeight = 72;
    $('.anchors a:not([data-anchors="false"])').on("click", function(e){
        e.preventDefault();
        var elementid = $(this).attr("href");
        if( document.querySelector('body').clientWidth > 1270 ) {
            var destination = $("#"+elementid).offset().top + scrollbar.scrollTop;
            destination-= headerHeight;
            scrollbar.scrollTo(0,destination,1000, function(){
                window.animations1.checkScroll();
            });
        } else {
            var destination = $("#"+elementid).offset().top;
            $('body').animate({
                scrollTop: destination}, 1000, function(){
                    window.animations1.checkScroll();
                });
        }
    });