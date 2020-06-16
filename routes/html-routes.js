const router = require("express").Router();
const question = require("../models/question");

// Api-Route
router.get("/quiz/:id", async (req, res) => res.render("quiz", await question.findOne(req.params.id)));

module.exports = router;