//Adds click function to answers
$(".answer-button").click(function(){
  $(".answer-button").prop("disabled", true);

  //Puts answers into local storage
  let isCorrect = $(this).data("iscorrect");
  let score = parseInt(localStorage.getItem("score")) || 0;
  let quiz = JSON.parse(localStorage.getItem("quiz"));
  let questionId = quiz.shift();
  localStorage.setItem("quiz", JSON.stringify(quiz));

  //Adds +1 on user's score if correct
  if(isCorrect){
    $("#answer-eval").text("Correct").addClass("text-success");
    localStorage.setItem("score", score+1);
  //Displays wrong message if user selects incorrectly
  }else{
    $("#answer-eval").text("Wrong").addClass("text-danger");
  }

  setTimeout(() => window.location.href=questionId ? `/quiz/${questionId}` : "/quiz-end", 500);
});
//Shows total questions
let totalQuestions = localStorage.getItem("totalQuestions");
$("#question-count").text(totalQuestions);

//Shows the correct amount of questions no matter where you are in the array
$("#questionId").text(totalQuestions - JSON.parse(localStorage.getItem("quiz")).length);