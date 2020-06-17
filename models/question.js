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

  if(findAnswersArr.length === 0) {
    return;
  }

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

const add = async (data) => {
  const newQuestion = await db.Question.create({questionText: data.question});
  let newAnswers = [{answerText: data.correctAnswer, isCorrect: true, questionId: newQuestion.id}];
  newAnswers = newAnswers.concat(data.answers.map((answer) => {
    return {
      answerText: answer,
      isCorrect: false,
      questionId: newQuestion.id
    };
  }));

  return db.Answer.bulkCreate(newAnswers.filter((answer) => answer.answerText.trim()));
};

module.exports = { findOne, add };
