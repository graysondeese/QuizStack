const db = require('../db/models');

async function findOne(id) {
    let findAnswersArr = await db.Answer.findAll({
        where: { questionId: id },
        include: [{
            model: db.Question
        }]
    });

    let question = {
        questionText: findAnswersArr[0].Question.questionText,
        answers: []
    };

    findAnswersArr.forEach(answer => {
        let a = {
            answerText: answer.answerText,
            isCorrect: answer.isCorrect
        }
        question.answers.push(a);
    });
    return question;
}
module.exports = findOne;
