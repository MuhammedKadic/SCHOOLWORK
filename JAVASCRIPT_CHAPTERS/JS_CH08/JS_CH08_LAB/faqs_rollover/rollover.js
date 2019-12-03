$(document).ready(function() {
  $('#faqs h2').hover(function() {
    $(this).toggleClass('minus');
    if ($(this).attr('class') != 'minus') {
      $(this).next().hide();
    } else {
      $(this).next().show();
    }
    event.preventDefault();
  });
  $('#faqs').find('a:first').focus();
}); // end ready
