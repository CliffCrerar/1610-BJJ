$('.onepage-menu').on('click', function () {
  if (screen.width <= 414) {
    $(this).hide();
  }
});

$('.navbar-toggle').on('click', function () {
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
