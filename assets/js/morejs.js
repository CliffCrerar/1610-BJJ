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
var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$('#send').on('click', function() {
    console.log('click send');
    var msg ={
        name:$('#name').val(),
        email: $('#email').val(),
        message:$('#msg').val().toLowerCase()
    };
    //console.log(msg);
    var validEmail = (msg.email).match(pattern);
    //console.log('validmail ',validEmail);

    // rgb(223, 223, 223)

    if(msg.name == '' && (validEmail == null || msg.email == '')){
        $("#email").css('border-color','red');
        $("#name").css('border-color','red');
        alert('MESSAGE NOT SENT \n Please enter your email address and name.');
    } else if(validEmail == null || msg.email == ''){
        $("#email").css('border-color','red');
        alert('MESSAGE NOT SENT \n Please enter a valid email address.');
    } else if (msg.name == '') {
        $("#name").css('border-color','red');
        alert('MESSAGE NOT SENT \n Please enter your name.');
    } else {
        sendMail(msg);
    }

});

// SEND DATA TO THE WEBMAIL SERVICE
var ip = ipSelect('mac')
function sendMail(msg) {
    $.ajax({
        method: 'POST',
        url: 'http://'+ip+':8006',
        origin: '*',
        contentType: 'text/plain',
        dataType: 'text',
        data: JSON.stringify(msg),
        timeout: 10000,
        success: function(data,status){
            //console.log(data);
            //console.log(status);
            if(data=='sent'){
                alert('MESSAGE WAS SENT');
            }
        },
        error: function(err, XHR, SOME){
            //console.log(err);
            //console.log(XHR);
            //console.log(SOME);
            if(err){
                alert('There was a problem with the mailing service, please contact us directly.');
            }
            
        }
    });
}

function ipSelect(a) {
    var mac = '172.16.0.104'; // mac address
    var dell = '72.16.0.104'; // dell pc address
    var prod = '172.31.30.78'; // webhost internal ip
    switch (a) {
        case 'mac': return mac;
        case 'dell': return dell;
        case 'prod': return prod;   
    }
};