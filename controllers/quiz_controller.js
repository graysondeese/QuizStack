// Requiring express
var express = require("express");
// importing the model quiz.js
// var quiz = require("../models/question.js");
// Defining routes on router
var router = express.Router();

// route for homepage
router.get("/", (req, res) => res.render("index"));

// route for quiz

router.get("/quiz", (req, res) => res.render("quiz"));

// route for highscores
router.get("/highscores", (req, res) => res.render("highscores"));

module.exports = router;
