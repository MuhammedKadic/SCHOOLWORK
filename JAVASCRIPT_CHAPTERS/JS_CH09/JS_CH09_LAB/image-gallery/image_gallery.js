$(document).ready(function() {
  $('#image_list a').each(function() {
    let swappedImage = new Image();
    swappedImage.src = $(this).attr('href');
  });
  $('#image_list a').click(function(evt) {
    let imageURL = $(this).attr('href');
    let caption = $(this).attr('title');
    $('#image').fadeOut(500, function(){
      $('#image').fadeIn(500);
      $('#image').attr('src', imageURL);
    });
    $('#caption').fadeOut(500, function(){
      $('#caption').fadeIn(500);
      $('#caption').text(caption);
    });


    evt.preventDefault();
  });
  $('li:first-child a').focus();
});
