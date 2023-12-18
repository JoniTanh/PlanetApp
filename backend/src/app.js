const path = require("path");
const express = require("express");
const cors = require("cors");
//const morgan = require("morgan");

const planetsRouter = require("./routes/planets");
const launchesRouter = require("./routes/launches");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "dist")));

app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

module.exports = app;
