function hidePage(){
    $('.page-trans').addClass('page-trans--ph');
   }
   
   
   
   $(document).ready(function(){
    $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto']):not(.anchors a):not(.fancybox):not([target='_blank'])", function(e) {
     e.preventDefault();
     hidePage();
     var self = this;
     setTimeout(function () {
      window.location.href = $(self).attr("href");
     }, 1200);
    });
   });