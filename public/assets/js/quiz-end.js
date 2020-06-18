//Lets user finish quiz and got to highscores page
$("#submit").click(() => {
  let username = $("#username").val();
  let score = localStorage.getItem("score");
  $.post("/api/highscore", {
    username,
    score
  }).then(() => {
    window.location.href="/highscores";
  });
});