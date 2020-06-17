const express = require("express");

const router = express.Router();

//@route    -   GET /share
//desc      -   Route to display all social posts in a day
//access    -   PUBLIC
router.get("/", (req, res) => {
  res.send("Share METHOD");
});

//@route    -   GET /share/create
//desc      -   Route to create a social post
//access    -   PUBLIC
router.get("/create", (req, res) => {
  res.send("Create Social Post");
});

module.exports = router;
