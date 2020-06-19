const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

// Middleware
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

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
	res.render("index", {
		data: {},
		errors: {},
	});
});

//@route    -   POST /share/create
//desc      -   Route to create a social post
//access    -   PUBLIC
router.post("/create", urlEncodedParser, (req, res) => {
	console.log(req.body);
	res.render("done", { data: req.body });
});

module.exports = router;
