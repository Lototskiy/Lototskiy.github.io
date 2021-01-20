import './assets/css/normalize.scss';
import './assets/css/main.scss';
import './assets/css/preloader.scss';
import './assets/js/consts.js';



//BLOCKS 

import './assets/css/blocks/btn.scss';
import './assets/css/blocks/mobile-menu.scss';
import './assets/css/blocks/mobile-basket.scss';
import './assets/css/blocks/socials.scss';
import './assets/css/blocks/payment.scss';
import './assets/css/blocks/breadcrumbs.scss';
import './assets/css/blocks/history-slider.scss';
import './assets/css/blocks/novelty-slider.scss';
import './assets/css/blocks/search.scss';
import './assets/css/blocks/product-item.scss';
import './assets/css/blocks/scroll-down.scss';
import './assets/css/blocks/video.scss';
import './assets/css/blocks/product-slider.scss';
import './assets/css/blocks/inputs.scss';
import './assets/css/blocks/pagination.scss';
import './assets/css/blocks/production-slider.scss';
import './assets/css/blocks/radio.scss';
import './assets/css/blocks/amount.scss';
import './assets/css/blocks/text-circle.scss';
import './assets/css/blocks/price.scss';

// SECTION ALL
import './assets/css/section/header.scss';
import './assets/css/section/footer.scss';
import './assets/css/section/main-screen.scss';


// SECTION INDEX
import './assets/css/section/hit.scss';
import './assets/css/section/novelty.scss';
import './assets/css/section/best-deals.scss';
import './assets/css/section/history.scss';
import './assets/css/section/uniqueness.scss';
import './assets/css/section/instagram.scss';


// SECTION СATALOG
import './assets/css/section/catalog.scss';



// SECTION PRODUCT
import './assets/css/section/product.scss';
import './assets/css/section/reviews-video.scss';
import './assets/css/section/composition.scss';



// SECTION ABOUT
import './assets/css/section/advantage.scss';
import './assets/css/section/production.scss';
import './assets/css/section/packaging.scss';



// SECTION DELIVERY
import './assets/css/section/delivery.scss';



// SECTION CONTACTS
import './assets/css/section/contacts.scss';
import './assets/css/section/shops.scss';




// SECTION REVIEWS
import './assets/css/section/reviews.scss';


// SECTION BASKET
import './assets/css/section/basket.scss';
import './assets/css/section/present.scss';
import './assets/css/section/information.scss';




import './assets/css/scrollApp.scss';






// JS
import './assets/js/header';
import './assets/js/history-slider';
import './assets/js/novelty-slider';
import './assets/js/product-slider';
import './assets/js/production-slider';
import './assets/js/video';
import './assets/js/anchors';
// import './assets/js/popup';
import './assets/js/mobile-menu';
import './assets/js/mobile-basket';
import './assets/js/footer';
import './assets/js/scrollApp.js';



import Scrollbar from 'smooth-scrollbar';

if (document.querySelector('body').clientWidth > LARGE_TABLET) {
	window.scrollbar = Scrollbar.init(document.querySelector('#scrollbar'), {
		wheelEventTarget: document.querySelector('body')
	});
}