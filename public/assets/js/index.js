//Adds click function to the startbutton on the main page
$("#startBtn").click(() => {
  localStorage.clear("score");
  localStorage.clear("quiz");
  $.get("/api/quiz", $("#dropdown").serialize()).then((data) => {
    localStorage.setItem("totalQuestions", data.length);
    let questionId = data.shift();
    localStorage.setItem("quiz", JSON.stringify(data));
    window.location.href = `/quiz/${questionId}`;
  });
});
$(".selectpicker").selectpicker();