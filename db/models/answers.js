const questions = require("./questions");

module.exports = function(sequelize, DataTypes){
    let Answer = sequelize.define("Answer", {
        answerText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isCorrect: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    Answer.belongsTo(questions(sequelize, DataTypes), {foreignKey:"questionId"});
    return Answer;
}