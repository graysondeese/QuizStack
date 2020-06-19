$(".delBtn").click(function () {
  $.ajax({
    url: `/api/question/${$(this).data("questionid")}`,
    type: "DELETE",
    success: () => {
      window.location.reload();
    }
  });
});