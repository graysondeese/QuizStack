"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Questions", [
      {questionText: "What does SQL stand for?", createdAt: new Date(), updatedAt: new Date()},
      {questionText: "Which SQL statement is used to extract data from a database?", createdAt: new Date(), updatedAt: new Date()},
      {questionText: "Which SQL statement is used to update data in a database?", createdAt: new Date(), updatedAt: new Date()},
      {questionText: "Which SQL statement is used to delete data from a database?", createdAt: new Date(), updatedAt: new Date()},
      {questionText: "Which SQL statement is used to insert new data in a database?", createdAt: new Date(), updatedAt: new Date()},
      {questionText: "With SQL, how do you select a column named 'FirstName' from a table named 'Persons'?", createdAt: new Date(), updatedAt: new Date()},
      {questionText: "With SQL, how do you select all the columns from a table named 'Persons'?", createdAt: new Date(), updatedAt: new Date()},
      {questionText: "With SQL, how do you select all the records from a table named 'Persons' where the value of the column 'FirstName' is 'Peter'?", createdAt: new Date(), updatedAt: new Date()},
      {questionText: "With SQL, how do you select all the records from a table named 'Persons' where the value of the column 'FirstName' starts with an 'a'?", createdAt: new Date(), updatedAt: new Date()},
      {questionText: "The OR operator displays a record if ANY conditions listed are true. The AND operator displays a record if ALL of the conditions listed are true", createdAt: new Date(), updatedAt: new Date()},
      {questionText: "What is the purpose of porpoise?", createdAt: new Date(), updatedAt: new Date()},
    ], {}).then(() => {
      return queryInterface.bulkInsert("Answers", [
        {answerText: "Strong Question Language", isCorrect: false, questionId: 1, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "Structured Question Language", isCorrect: false, questionId: 1, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "Structured Query Language", isCorrect: true, questionId: 1, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "EXTRACT", isCorrect: false, questionId: 2, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT", isCorrect: true, questionId: 2, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "OPEN", isCorrect: false, questionId: 2, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "GET", isCorrect: false, questionId: 2, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SAVE", isCorrect: false, questionId: 3, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SAVE AS", isCorrect: false, questionId: 3, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "MODIFY", isCorrect: false, questionId: 3, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "UPDATE", isCorrect: true, questionId: 3, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "COLLAPSE", isCorrect: false, questionId: 4, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "DELETE", isCorrect: true, questionId: 4, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "REMOVE", isCorrect: false, questionId: 4, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "ADD NEW", isCorrect: false, questionId: 5, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "INSERT NEW", isCorrect: false, questionId: 5, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "ADD RECORD", isCorrect: false, questionId: 5, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "INSERT INTO", isCorrect: true, questionId: 5, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT FirstName FROM Persons", isCorrect: true, questionId: 6, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT Persons.FirstName", isCorrect: false, questionId: 6, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "EXTRACT FirstName FROM Persons", isCorrect: false, questionId: 6, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT Persons", isCorrect: false, questionId: 7, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT [all] FROM Persons", isCorrect: false, questionId: 7, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT * FROM Persons", isCorrect: true, questionId: 7, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT *.Persons", isCorrect: false, questionId: 7, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT [all] FROM Persons WHERE FirstName='Peter'", isCorrect: false, questionId: 8, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT * FROM Persons WHERE FirstName<>'Peter'", isCorrect: false, questionId: 8, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT * FROM Persons WHERE FirstName='Peter'", isCorrect: true, questionId: 8, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT [all] FROM Persons WHERE FirstName LIKE 'Peter'", isCorrect: false, questionId: 8, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT * FROM Persons WHERE FirstName='%a%'", isCorrect: false, questionId: 9, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT * FROM Persons WHERE FirstName='a'", isCorrect: false, questionId: 9, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT * FROM Persons WHERE FirstName LIKE '%a'", isCorrect: false, questionId: 9, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "SELECT * FROM Persons WHERE FirstName LIKE 'a%'", isCorrect: true, questionId: 9, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "False", isCorrect: false, questionId: 10, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "True", isCorrect: true, questionId: 10, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "No one knows", isCorrect: true, questionId: 11, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "42", isCorrect: false, questionId: 11, createdAt: new Date(), updatedAt: new Date()},
        {answerText: "\\_('.')_/", isCorrect: false, questionId: 11, createdAt: new Date(), updatedAt: new Date()},
      ], {});
    });
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("answers", null, {truncate: true, restartIdentity: true}).then(() => {
      return queryInterface.removeConstraint("answers", "answers_ibfk_1").then(() => {
        return queryInterface.bulkDelete("questions", null, {truncate: true, restartIdentity: true}).then(() => {
          return queryInterface.addConstraint("answers", {
            type: "FOREIGN KEY",
            fields: ["questionId"],
            name: "answers_ibfk_1",
            references: {
              table: "questions",
              field: "id",
            },
          });
        });
      });
    });
  }
};
