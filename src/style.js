/* 1610 - BJJ Site entry point */

import _ from 'lodash';
/* CSS */
import './assets/fonts/fontawesome/font-awesome.min.css';
import './assets/fonts/pe-icon/pe-icon.css';
import './assets/vendors/bootstrap/grid.css';
import './assets/vendors/magnific-popup/magnific-popup.min.css';
import './assets/vendors/swiper/swiper.css';
import './assets/css/main.css';
import './assets/css/oth.css';

var img = $('body').find('img');

console.log(img);

$('#navLogo').attr('src', require('./assets/img/logo.png'));
$('#abt1').attr('src', require('./assets/img/about/1.jpg'));
$('#kimaru').attr('src', require('./assets/img/kimuraweb.jpeg'));
$('#b1').attr('src', require('./assets/img/blog/1.jpg'));
$('#b2').attr('src', require('./assets/img/blog/2.jpg'));
$('#b3').attr('src', require('./assets/img/blog/3.jpg'));
$('#p2').attr(require('./assets/img/portfolio/2.jpg'));
$('#p3').attr(require('./assets/img/portfolio/3.jpg'));
$('#p4').attr(require('./assets/img/portfolio/4.jpg'));
$('#p5').attr(require('./assets/img/portfolio/5.jpg'));
$('#p6').attr(require('./assets/img/portfolio/6.jpg'));
$('#p7').attr(require('./assets/img/portfolio/7.jpg'));
$('#p8').attr(require('./assets/img/portfolio/8.jpg'));