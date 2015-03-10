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








$(document).ready(function createMessage() {
var messageForPlayers = document.getElementById("message");
  messageForPlayers.innerHTML = "Press the space bar to begin the race.";
});

$(document).ready(function () {
  $(document).keyup(function go( event ){
    if ( event.which == 32) {

      $(document).ready(function createMessage() {
        var messageForPlayers = document.getElementById("message");
        messageForPlayers.innerHTML = "READY SET GO!";
      });

      var i = 1;
      var t = 1;
        $(document).ready(function player1Strip(){
          $(document).keyup(function( event ){
            if ( event.which == 65) {
              $("#player1_strip").children("td:nth-of-type(" + i + ")").css( "background-color", "red");
              $("#player1_strip").children("td:nth-of-type(" + (i - 1) + ")").css( "background-color", "transparent");
              i++;
              if (i === 10) {
                $(document).ready(function createMessage() {
                  var messageForPlayers = document.getElementById("message");
                  messageForPlayers.innerHTML = "Player 1 wins!";
                });
              }
            }
          });
        });

        $(document).ready(function player2Strip(){
          $(document).keyup(function( event ){
            if ( event.which == 76) {
              $("#player2_strip").children("td:nth-of-type(" + t + ")").css( "background-color", "blue");
              $("#player2_strip").children("td:nth-of-type(" + (t - 1) + ")").css( "background-color", "transparent");
              t++;
              if (t === 10) {
                $(document).ready(function createMessage() {
                  var messageForPlayers = document.getElementById("message");
                  messageForPlayers.innerHTML = "Player 2 wins!";
                });
              }
            }
          });
        });
      // if (i === 10) {
      //     $(document).ready(function createMessage() {
      //       var messageForPlayers = document.getElementById("message");
      //       messageForPlayers.innerHTML = "Player 1 wins!";
      //     });
      // } else if (t === 10) {
      //     $(document).ready(function createMessage() {
      //       var messageForPlayers = document.getElementById("message");
      //       messageForPlayers.innerHTML = "Player 1 wins!";
      //     });
      // } else {
      //     $(document).ready(function createMessage() {
      //       var messageForPlayers = document.getElementById("message");
      //       messageForPlayers.innerHTML = "I don't know what the fudge happened!";
      //     });
      // }

    }
  });
});