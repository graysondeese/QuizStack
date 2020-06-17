const router = require("express").Router();
const question = require("../models/question");

// Api-Route
router.get("/quiz/:id", async (req, res) => res.render("quiz", await question.findOne(req.params.id)));

// route for homepage
router.get("/", (req, res) => res.render("index"));

// route for highscores
router.get("/highscores", (req, res) => res.render("highscores"));


module.exports = router;