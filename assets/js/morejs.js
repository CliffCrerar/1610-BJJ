// Loading options
var loadscreenTimeout = 3000;
var slideFade = 'Slide';
// Loading options
$(window).on('load', function() {
    if (slideFade == 'Fade') {
        setTimeout(function() { $('#loader').fadeOut(); }, loadscreenTimeout);
    } else if (slideFade == 'Slide') {
        setTimeout(function() { $('#loader').slideUp(); }, loadscreenTimeout);
    }

    setTimeout(function() { $('#loader').fadeOut(); }, loadscreenTimeout);
});

$('.onepage-menu').on('click', function() {
    if (screen.width <= 414) {
        $(this).hide();
    }
});

$('.navbar-toggle').on('click', function() {
    if (screen.width <= 414) {
        $('.onepage-menu').show();
    }
});

if (screen.width <= 414) {
    $('.hero__title').css('color', '#660000');
    $('.hero__title').css('width', screen.width);
    $('.typed').css('width', screen.width);
    $('.hero__text').css('width', screen.width);
    $('.hero__title').css('height', screen.height / 4);
}

// SUBMIT EMAIL FORM

$('#send').on('click', function() {
    console.log('click send')
});

// SEND DATA TO THE WEBMAIL SERVICE

function sendMail() {
    $.ajax({

    });
}