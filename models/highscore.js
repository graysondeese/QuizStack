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
}


module.exports = { findAll };
