const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Share METHOD");
});

router.get("/create", (req, res) => {
  res.send("Create Social Post");
});

module.exports = router;
