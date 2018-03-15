import htmlHead from './head.html';
import htmlBody from './body.html';

/* IMPORT IMAGES */
import navLogo from '../img/logo.png';
import img1 from '../img/blog/1.jpg';
import img2 from '../img/blog/2.jpg';
import img3 from '../img/blog/3.jpg';
import kimuraweb from '../img/kimuraweb.jpeg';
import portfolio1 from '../img/portfolio/1.jpg';
import portfolio2 from '../img/portfolio/2.jpg';
import portfolio3 from '../img/portfolio/3.jpg';
import portfolio4 from '../img/portfolio/4.jpg';
import portfolio5 from '../img/portfolio/5.jpg';
import portfolio6 from '../img/portfolio/6.jpg';
import portfolio7 from '../img/portfolio/7.jpg';
import portfolio8 from '../img/portfolio/8.jpg';
import portfolio9 from '../img/portfolio/9.jpg';

$('head').append(htmlHead);
$('body').append(htmlBody);

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