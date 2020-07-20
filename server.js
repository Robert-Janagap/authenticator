const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();

//  body parser
app.use(express.json({ extended: false }));

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

// request dev logger
app.use(morgan("dev"));

// log all request to access.log
app.use(morgan("combined", { stream: accessLogStream }));

const PORT = process.env.PORT || 3000;

const listen = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

module.exports = app;
