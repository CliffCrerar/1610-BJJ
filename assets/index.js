/* --------------------------- */
/*          MAIN ENTRY         */
/* --------------------------- */

/*<link rel="stylesheet" type="text/css" href="assets/fonts/fontawesome/font-awesome.min.css">*/
import './fonts/fontawesome/font-awesome.min.css';
/*<link rel="stylesheet" type="text/css" href="assets/fonts/pe-icon/pe-icon.css">*/
import './fonts/pe-icon/pe-icon.css';
/*<!-- Vendors-->*/
/*<link rel="stylesheet" type="text/css" href="assets/vendors/bootstrap/grid.css">*/
import './vendors/bootstrap/grid.css';
/*<link rel="stylesheet" type="text/css" href="assets/vendors/magnific-popup/magnific-popup.min.css">*/
import './vendors/magnific-popup/magnific-popup.min.css';
/*<link rel="stylesheet" type="text/css" href="assets/vendors/swiper/swiper.css">*/
import './vendors/swiper/swiper.css';
/*<!-- App & fonts-->*/
/*<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Permanent+Marker|Cinzel|Righteous">*/
import './css/font.css';
/*<link rel="stylesheet" type="text/css" href="assets/css/main.css">*/
import './css/main.css';
//<!-- Vendors-->
//<script type="text/javascript" src="assets/vendors/jquery/jquery.min.js"></script>
import './vendors/jquery/jquery.min.js';
//<script type="text/javascript" src="assets/vendors/imagesloaded/imagesloaded.pkgd.js"></script>
import './vendors/imagesloaded/imagesloaded.pkgd.js';
//<script type="text/javascript" src="assets/vendors/isotope-layout/isotope.pkgd.js"></script>
import './vendors/isotope-layout/isotope.pkgd.js';
//<script type="text/javascript" src="assets/vendors/jquery-one-page/jquery.nav.min.js"></script>
import './vendors/jquery-one-page/jquery.nav.min.js';
//<script type="text/javascript" src="assets/vendors/jquery.easing/jquery.easing.min.js"></script>
import './vendors/jquery.easing/jquery.easing.min.js';
//<script type="text/javascript" src="assets/vendors/jquery.matchHeight/jquery.matchHeight.min.js"></script>
import './vendors/jquery.matchHeight/jquery.matchHeight.min.js';
//<script type="text/javascript" src="assets/vendors/magnific-popup/jquery.magnific-popup.min.js"></script>
import './vendors/magnific-popup/jquery.magnific-popup.min.js';
//<script type="text/javascript" src="assets/vendors/masonry-layout/masonry.pkgd.js"></script>
import './vendors/masonry-layout/masonry.pkgd.js';
//<script type="text/javascript" src="assets/vendors/swiper/swiper.jquery.js"></script>
import './vendors/swiper/swiper.jquery.js';
//<sc/ript type="text/javascript" src="assets/vendors/menu/menu.js"></script>
import './vendors/menu/menu.js';
//<script type="text/javascript" src="assets/vendors/typed/typed.min.js"></script>
import './vendors/typed/typed.min.js';
//<!-- App-->
//<script type="text/javascript" src="assets/js/main.js"></script>
import './js/main.js';

import htmlHead from './html/head.html';
import htmlBody from './html/body.html';

/* IMPORT IMAGES */
import navLogo from './img/logo.png';
import img1 from './img/blog/1.jpg';
import img2 from './img/blog/2.jpg';
import img3 from './img/blog/3.jpg';

// ./assets/img/kimuraweb.jpeg
// ./assets/img/portfolio/1.jpg
// ./assets/img/portfolio/2.jpg
// ./assets/img/portfolio/3.jpg
// ./assets/img/portfolio/4.jpg
// ./assets/img/portfolio/5.jpg
// ./assets/img/portfolio/6.jpg
// ./assets/img/portfolio/7.jpg
// ./assets/img/portfolio/8.jpg
// ./assets/img/portfolio/9.jpg

$('head').append(htmlHead);
$('body').append(htmlBody);
/* WEB PACK IMAGES */
$('#navLogo').attr('src', navLogo);
$('#img1').attr('src', img1);
$('#img2').atte('src', img2);
$('#img3').atte('src', img3);