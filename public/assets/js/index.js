$("#startBtn").click(() => {
  localStorage.clear("score");
  localStorage.clear("quiz");
  $.get("/api/quiz").then((data) => {
    let questionId = data.shift();
    localStorage.setItem("quiz", JSON.stringify(data));
    window.location.href = `/quiz/${questionId}`;
  });
});
