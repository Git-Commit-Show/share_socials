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
	res.render("../views/index.ejs", {
		data: {},
		errors: {},
	});
});

//@route    -   POST /share/create
//desc      -   Route to create a social post
//access    -   PUBLIC
router.post("/create", (req, res) => {
	res.render("../views/index.ejs", {
		data: req.body,
		error: {
			field1: {
				msg: "A message is requried",
			},
			field2: {
				msg: "A message is requried",
			},
			field3: {
				msg: "A message is requried",
			},
		},
	});

	console.log(res);
});

module.exports = router;
