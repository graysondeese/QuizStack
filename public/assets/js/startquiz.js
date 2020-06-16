$(function(){
// Make sure classes line up
  $("#").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newQuestion = {
      question: $("#startBtn").val().trim(),

    };
    console.log(newQuestion);
    // Send the POST request.
    $.ajax("/highscores", {
      type: "GET",
    }).then(
      function() {
        console.log("High Scores!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});