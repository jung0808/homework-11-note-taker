const router = require("express").Router();
const notes = require("../db/db.json");

router.get("/notes", function (req, res) {
  console.log("message");
  res.json(notes);
});

module.exports = router;
