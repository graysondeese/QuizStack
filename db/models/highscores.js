//Sets highscore table from Sequelize
module.exports = function(sequelize, DataTypes){
  let highscore = sequelize.define("Highscore", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  return highscore;
};
