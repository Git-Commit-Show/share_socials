const express = require("express");
const path = require("path");
const shareRoute = require("./routes/share");
const app = express();

// PORT
const PORT = process.env.PORT;

// Set EJS Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use("/share", shareRoute);

//@route    -   GET /
//desc      -   Simple Route for HomePage
//access    -   PUBLIC
app.get("/", (req, res) => {
	res.send("Home URL");
});

app.use((req, res, next) => {
	res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

app.listen(8000, () => {
	console.log("App is running at http://localhost:8000");
});
