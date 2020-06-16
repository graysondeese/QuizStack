const router = require("express").Router();
const question = require("../models/question");

// Api-Route
router.get("/api/question/:id", async (req, res) => res.json(await question.findOne(req.params.id)));

module.exports = router;
