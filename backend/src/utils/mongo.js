const mongoose = require("mongoose");
const config = require("./config");

const MONGODB_URI = config.MONGODB_URI;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGODB_URI);
}

module.exports = {
  mongoConnect,
};
