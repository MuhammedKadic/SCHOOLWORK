$(document).ready(function() {
  $('#faqs h2').click(function() {
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
