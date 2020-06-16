module.exports = function(sequelize, DataTypes){
  let highscore = sequelize.define("highscore", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return highscore;
};
