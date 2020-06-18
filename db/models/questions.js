const Category = require("./categories");

module.exports = function(sequelize, DataTypes){
  let Question = sequelize.define("Question", {
    questionText: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  Question.belongsTo(Category(sequelize, DataTypes), { foreignKey: "categoryId" });
  return Question;
};