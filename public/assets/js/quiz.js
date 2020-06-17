$(".answer-button").click(function(){
    $(".answer-button").prop('disabled', true);
    let isCorrect = $(this).data("iscorrect");
    let questionId = parseInt($("#question-id").val());
    let score = parseInt(localStorage.getItem("score")) || 0;
    if(isCorrect){
        $("#answer-eval").text('Correct').addClass('text-success');
        localStorage.setItem("score", score+1);
    }else{
        $("#answer-eval").text('Wrong').addClass('text-danger');
    }
    setTimeout(() => window.location.href=`/quiz/${questionId+1}`, 500);
});
