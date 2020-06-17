$("#addAnswer").click(function (event) {
  event.preventDefault();
  $(`<div class="form-group">
    <label class="text-danger">Enter <strong>WRONG</strong> answer in this box</label>
    <textarea name="answers" class="form-control" placeholder="wrong answer choice"></textarea>
    </div>`).insertBefore($("#save"));
});

$("#addQuestionForm").submit(function(event) {
  event.preventDefault();
  $.post("/api/question", $(this).serialize());
});