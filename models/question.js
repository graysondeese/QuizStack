//Calls the database models 
const db = require("../db/models");

// Asks database to find all answers to the questions provided
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

  //Remapping sequelize model to a plane array
  findAnswersArr.forEach((answer) => {
    let a = {
      answerText: answer.answerText,
      isCorrect: answer.isCorrect,
    };
    question.answers.push(a);
  });
  return question;
};

//runs corrects answers in the background and returns when selected
const add = async (data) => {
  const newQuestion = await db.Question.create({questionText: data.question, categoryId: data.category});
  let newAnswers = [{answerText: data.correctAnswer, isCorrect: true, questionId: newQuestion.id}];
  newAnswers = newAnswers.concat(data.answers.map(answer => {
    return {
      answerText: answer,
      isCorrect: false,
      questionId: newQuestion.id
    };
  }));

  return db.Answer.bulkCreate(newAnswers.filter(answer => answer.answerText.trim()));
};

//Generates the quiz format from the main page
const generateQuiz = async () => {
  let questions = await db.Question.findAll({ attributes: ["id"] });
  return questions.map(question => question.id);
};

module.exports = { findOne, add, generateQuiz };
