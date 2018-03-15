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

import htmlHead from './html/head.html';
import htmlBody from './html/body.html';

$('head').append(htmlHead);
$('body').append(htmlBody);

/* IMPORT IMAGES */
import navLogo from './img/logo.png';
import img1 from './img/blog/1.jpg';
import img2 from './img/blog/2.jpg';
import img3 from './img/blog/3.jpg';
import kimuraweb from './img/kimuraweb.jpeg';
import portfolio1 from './img/portfolio/1.jpg';
import portfolio2 from './img/portfolio/2.jpg';
import portfolio3 from './img/portfolio/3.jpg';
import portfolio4 from './img/portfolio/4.jpg';
import portfolio5 from './img/portfolio/5.jpg';
import portfolio6 from './img/portfolio/6.jpg';
import portfolio7 from './img/portfolio/7.jpg';
import portfolio8 from './img/portfolio/8.jpg';
import portfolio9 from './img/portfolio/9.jpg';

/* WEB PACK IMAGES */
$('#navLogo').attr('src', navLogo);
$('#img1').attr('src', img1);
$('#img2').attr('src', img2);
$('#img3').attr('src', img3);
$('kimuraweb').attr('src', kimuraweb);
$('#pf1img').attr('src', portfolio1);

$('#pf2div').attr('href', portfolio2);
$('#pf2a').attr('href', portfolio2);
$('#pf2img').attr('src', portfolio2);

$('#pf3div').attr('href', portfolio3);
$('#pf3a').attr('href', portfolio3);
$('#pf3img').attr('src', portfolio3);

$('#pf4iv').attr('href', portfolio4);
$('#pf4a').attr('href', portfolio4);
$('#pf4img').attr('src', portfolio4);

$('#pf5div').attr('href', portfolio5);
$('#pf5a').attr('href', portfolio5);
$('#pf5img').attr('src', portfolio5);

$('#pf6div').attr('href', portfolio6);
$('#pf6a').attr('href', portfolio6);
$('#pf6img').attr('src', portfolio6);

$('#pf7div').attr('href', portfolio7);
$('#pf7a').attr('href', portfolio7);
$('#pf7img').attr('src', portfolio7);

$('#pf8div').attr('href', portfolio8);
$('#pf8a').attr('href', portfolio8);
$('#pf8img').attr('src', portfolio8);

$('#pf9div').attr('href', portfolio9);
$('#pf9a').attr('href', portfolio9);
$('#pf9img').attr('src', portfolio9);

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
import './js/main';