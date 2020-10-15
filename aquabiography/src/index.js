import './assets/css/normalize.scss';
import './assets/css/blocks/preloader.scss';
import './assets/css/main.scss';


//BLOCKS 
import './assets/css/blocks/header.scss';
import './assets/css/blocks/main-screen.scss';
import './assets/css/blocks/products.scss';
import './assets/css/blocks/project-slider.scss';
import './assets/css/blocks/project.scss';
import './assets/css/blocks/footer.scss';
import './assets/js/footer.js';
import './assets/css/blocks/main-screen.scss';
import './assets/css/blocks/btn.scss';
import './assets/css/blocks/link.scss';
import './assets/css/blocks/video.scss';
import './assets/css/blocks/inputs.scss';
import './assets/css/blocks/contact.scss';
import './assets/css/blocks/socials.scss';
import './assets/css/blocks/scroll-down.scss';
import './assets/css/blocks/cursor.scss';
import './assets/css/blocks/dark-section.scss';
import './assets/css/blocks/mobile-menu.scss';
import './assets/css/blocks/products-slider.scss';




import './assets/js/video';
import './assets/js/fixed-menu';
import './assets/js/anchors';
import './assets/js/project-slider';
import './assets/js/slide-arrow';
import './assets/js/cursor';
import './assets/js/dark-section';
// import './assets/js/main-screen';
import './assets/js/mobile-menu';
import './assets/js/products-slider';

import './assets/css/blocks/scrollApp.scss';
import './assets/js/scrollApp.js';


$(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
    // $('[href=#]').click(function(){return false});
  });



import Scrollbar from 'smooth-scrollbar';

if( document.querySelector('body').clientWidth > 1270 ) {
  window.scrollbar = Scrollbar.init(document.querySelector('#scrollbar'),{wheelEventTarget: document.querySelector('body')});
}


setTimeout(function(){
  window.scrollbar.update();
},500)
