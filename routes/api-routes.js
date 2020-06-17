const router = require("express").Router();
const question = require("../models/question");
const highscore = require("../models/highscore");

// Api-Route
router.get("/api/question/:id", async (req, res) => res.json(await question.findOne(req.params.id)));

// highScore
router.get("/api/highscore", async (req, res) => res.json(await highscore.findAll()));

module.exports = router;
