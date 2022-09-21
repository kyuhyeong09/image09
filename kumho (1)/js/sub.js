$(document).ready(function(){

   $('.lnb .menu .depth .btn_open').on('click' , function(){
       $('this').parents('depth').addClass('open'); 
   }); 
   $('.lnb .menu .depth .btn_close').on('click' , function(){
    $('this').parents('depth').removeClass('open'); 
   }); 
   

});