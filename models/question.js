const db = require("../db/models");

const findOne = async (id) => {
  let findAnswersArr = await db.Answer.findAll({
    where: { questionId: id },
    include: [
      {
        model: db.Question,
      },
    ],
  });

  if(findAnswersArr.length === 0) return;

  let question = {
    id,
    questionText: findAnswersArr[0].Question.questionText,
    answers: [],
  };

  findAnswersArr.forEach((answer) => {
    let a = {
      answerText: answer.answerText,
      isCorrect: answer.isCorrect,
    };
    question.answers.push(a);
  });
  return question;
};
module.exports = {findOne};
