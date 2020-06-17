const router = require("express").Router();
const question = require("../models/question");
const highscore = require("../models/highscore");

// Api-Route
router.get("/api/question/:id", async (req, res) => res.json(await question.findOne(req.params.id)));

router.post("/api/question", async (req, res) => res.send(await question.add(req.body)));

// Save Highscore
router.post("/api/highscore", async (req, res) => {
  try{
    await highscore.save(req.body);
  }catch(error){
    console.error(error);
    res.sendStatus(500);
  }
  res.sendStatus(201);
});

// highScore
router.get("/api/highscore", async (req, res) => res.json(await highscore.findAll()));

module.exports = router;
