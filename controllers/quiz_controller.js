// Requiring express
var express = require("express");
// importing the model quiz.js
var quiz = require("../models/question.js");
// Defining routes on router
var router = express.Router();

// route for homepage
router.get("/", function(req, res) {
    console.log(hbsObject);
    res.render("index", hbsObject);
    
});

// route for quiz
router.get("/quiz", function(req, res) {
    
});

// route for highscores
router.get("/highscores", function(req, res) {
    
});

module.exports = router;
  