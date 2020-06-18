module.exports = function(sequelize, DataTypes){
  let Category = sequelize.define("Category", {
    categoryText: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Category;
};
