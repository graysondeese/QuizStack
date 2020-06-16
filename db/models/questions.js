module.exports = function(sequelize, DataTypes){
    let Question = sequelize.define("Question", {
        questionText: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Question;
}