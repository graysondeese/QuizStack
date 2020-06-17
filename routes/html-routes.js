const router = require("express").Router();
const questionModel = require("../models/question");
const highscoreModel = require("../models/highscore");
// Api-Route
router.get("/quiz/:id", async (req, res) => {
  let question = await questionModel.findOne(req.params.id);
  if(question){
    res.render("quiz", question);
  }else{
    res.render("quiz-end");
  }

});

// route for homepage
router.get("/", (req, res) => res.render("index"));

// route for highscores
router.get("/highscores", async (req, res) => res.render("highscores", await highscoreModel.findAll()));


module.exports = router;