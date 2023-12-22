const mongoose = require("mongoose");
const config = require("./config");

const MONGODB_URI = config.MONGODB_URI;

async function mongoConnect() {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log(`Error connecting to MongoDB: ${error.message}`);
    });
}

module.exports = {
  mongoConnect,
};
