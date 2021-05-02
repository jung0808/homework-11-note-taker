const router = require("express").Router();
const notes = require("../db/db.json");

router.get("/notes", function (req, res) {
  res.json(notes);
});

router.post("/notes", function (req, res) {
  // res.json(notes);
  console.log(req);
  req.body;
});

module.exports = router;
