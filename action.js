// $(document).ready(function(){
//   $("td").click(function(){
//     $(this).hide();
//   });
// });

// $(document).ready(function(){
//   $("td").keypress(function( event ){
//     if ( event.which == 97) {
//       $(this).hide();
//     }
//   });
// });

// $("#player1_strip").ready(function(){
//   $("td").click(function(){
//     $(this).hide();
//   });
// });

// $(document).ready(function(){
//   $("td").click(function(){
//     $(this).hide();
//   });
// });

// $("#player1_strip").ready(function(){
//   $("td").keypress(function( event ){
//     if ( event.which == 97) {
//       console.log("YESSSSS")
//       $(this).parent().next().hide();
//     }
//   });
// });



// $(document).ready(function() {
//   if ( event.which != 32 ) {
//     document.write("GO!")

//   } else {
//     document.write("Press 'space bar' to begin the race")
//   }
// });

// var gameplayMessage = "Press space bar";
// function displayMessage() {
//   document.write(gameplayMessage);
// }
// displayMessage();

$(document).ready(function () {
  $(document).keyup(function go( event ){
    if ( event.which == 32) {

      // gameplayMessage = "GO!";
      // displayMessage(gameplayMessage);
      var i = 1;
      $(document).ready(function player1Strip(){
        $(document).keyup(function( event ){
          if ( event.which == 65) {
            $("#player1_strip").children("td:nth-of-type(" + i + ")").css( "background-color", "red");
            $("#player1_strip").children("td:nth-of-type(" + (i - 1) + ")").css( "background-color", "transparent");
            i++;
          }
        });
      });

      var t = 1;
      $(document).ready(function player2Strip(){
        $(document).keyup(function( event ){
          if ( event.which == 76) {
            $("#player2_strip").children("td:nth-of-type(" + t + ")").css( "background-color", "blue");
            $("#player2_strip").children("td:nth-of-type(" + (t - 1) + ")").css( "background-color", "transparent");
            t++;
          }
        });
      });

    }
  });
});