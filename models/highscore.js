const db = require("../db/models");

const findAll = async () => {
  let highScoreArr = await db.Highscore.findAll();
  return highScoreArr.map((highscore) => {
    return {
      username: highscore.username,
      score: highscore.score,
      id: highscore.id
    };
  });
};

const save = async (data) => db.Highscore.create(data);

module.exports = { findAll, save };
