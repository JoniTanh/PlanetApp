const path = require("path");
const express = require("express");
const cors = require("cors");
//const morgan = require("morgan");
const api = require("./routes/api");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "dist")));

app.use("/v1", api);

module.exports = app;
