const express = require("express");
const shareRoute = require("./routes/share");
const app = express();

// PORT
const PORT = process.env.PORT;

// Middleware
app.use("/share", shareRoute);

//@route    -   GET /
//desc      -   Simple Route for HomePage
//access    -   PUBLIC
app.get("/", (req, res) => {
  res.send("Home URL");
});

app.listen(PORT || 8000);
