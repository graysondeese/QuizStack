// Requiring express
var express = require('express');
// importing the model quiz.js
var quiz = require('../models/question.js');
// Defining routes on router
var router = express.Router();

// route for homepage
router.get('/',(req, res) => res.render('index'));

// route for quiz

router.get("/quiz", (req, res) => res.render("quiz"));

// route for highscores
router.get("/highscores", (req, res) => res.render("highscores"));



// Access the leaderboard
// app.get('/players', async function(req, res) {
//     // retrieve ‘lim’ from the query string info
//     let { lim } = req.query;
//     db.collection('players')
//         .find()
//         // -1 is for descending and 1 is for ascending
//         .sort({ score: -1 })
//         // Show only [lim] players
//         .limit(5)
//         .toArray(function(err, result) {
//             if (err)
//                 res.send({ status: false, msg: 'failed to retrieve players' });
//             console.log(Array.from(result));
//             res.send({ status: true, msg: result });
//         });
//  });

module.exports = router;
  