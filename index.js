const express = require("express");

const app = express();

// PORT
const PORT = process.env.PORT;

// Routes
const shareRoute = require("./routes/share");

// Middleware
app.use("/share", shareRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Home URL");
});

app.listen(PORT || 8000);
