"use strict";

// Jquery
$(document).ready(function () {

  $("#h1").click(function () {
    $(this).toggleClass("on off");
    console.log('@@');
  });


//   $("#h1").click(function(){
//     if($(this).hasClass("on")) {
//         $(this).addClass("off").removeClass("on");
//     } else {
//         $(this).addClass("on").removeClass("off");
//     }
// });



});