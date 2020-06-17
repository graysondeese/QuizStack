$(".answer-button").click(function(){
  $(".answer-button").prop("disabled", true);

  let isCorrect = $(this).data("iscorrect");
  let score = parseInt(localStorage.getItem("score")) || 0;
  let quiz = JSON.parse(localStorage.getItem("quiz"));
  let questionId = quiz.shift();
  localStorage.setItem("quiz", JSON.stringify(quiz));

  if(isCorrect){
    $("#answer-eval").text("Correct").addClass("text-success");
    localStorage.setItem("score", score+1);
  }else{
    $("#answer-eval").text("Wrong").addClass("text-danger");
  }

  setTimeout(() => window.location.href=questionId ? `/quiz/${questionId}` : "/quiz-end", 500);
});
