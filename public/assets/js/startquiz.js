// $(function(){
//Make sure classes line up
//     $(".startquiz").on("submit", function(event) {
//         // Make sure to preventDefault on a submit event.
//         event.preventDefault();
    
//         var newQuestion = {
//           question: $("#startBtn").val().trim(),
    
//         };
    
//         // Send the POST request.
//         $.ajax("/controllers/quiz_controller.js", {
//           type: "POST",
//           data: newQuestion
//         }).then(
//           function() {
//             console.log("New Question!");
//             // Reload the page to get the updated list
//             location.reload();
//           }
//         );
//       });
// });