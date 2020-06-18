const express = require("express");
const bodyParser = require("body-parser");
const shareRoute = require("./routes/share");
const app = express();

// PORT
const PORT = process.env.PORT;

// Middleware
const middlewares = [bodyParser.urlencoded({ extended: true })];

app.use(middlewares);
app.use("/share", shareRoute);

//@route    -   GET /
//desc      -   Simple Route for HomePage
//access    -   PUBLIC
app.get("/", (req, res) => {
	res.send("Home URL");
});

app.listen(8000, () => {
	console.log("App is running at http://localhost:8000");
});
