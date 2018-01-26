var main = function() {
  $('#top-text').keyup(function () {
  	var top = $('#top-text').val();
    $('.top-caption').text(top);
  });
  
  $('#bottom-text').keyup(function(){
    var bottom = $('#bottom-text').val();
    $('.bottom-caption').text(bottom);
  });
  
  $('#image-url').keyup(function(){
  	var picture = $('#image-url').val();
    $('.thumbnail img').attr('src', picture);
	});
  
};
 
$(document).ready(main);

