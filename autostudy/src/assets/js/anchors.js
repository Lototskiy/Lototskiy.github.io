$('.anchors a:not([data-anchors])').on("click", function(e){
    e.preventDefault();
    var elementid = $(this).attr("href");
    if ( document.querySelector("#"+elementid) ) {
        var destination = $("#"+elementid).offset().top;
        $('body').animate({
            scrollTop: destination}, 1000, function(){
                // window.animations1.checkScroll();
                window.hideMenu();
            });
    } else {
        location.href = '/#' + elementid;
    }
});