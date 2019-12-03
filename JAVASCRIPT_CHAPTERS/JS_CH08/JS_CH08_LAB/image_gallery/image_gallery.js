$(document).ready(function() {
  $('#image_list a').each(function() {
    let swappedImage = new Image();
    swappedImage.src = $(this).attr('href');
  });
  $('#image_list a').click(function(evt) {
    let imageURL = $(this).attr('href');
    $('#image').attr('src', imageURL);

    let caption = $(this).attr('title');
    $('#caption').text(caption);

    evt.preventDefault();
  });
  $('li:first-child a').focus();
});
