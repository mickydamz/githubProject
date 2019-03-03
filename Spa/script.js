$(document).ready(function(){
    $('.home').addClass('current');
    $('li').on('click', function(){
     $('li').removeClass('current');
     $(this).addClass('current');
   });
  
});