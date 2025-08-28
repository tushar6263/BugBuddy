const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");

mongoose
  .connect(`${config.get("MONGODB_URI")}/bagbuddy`)
  .then(() => {
    dbgr("Connected to MongoDB");
  })
  .catch((err) => {
    dbgr("MongoDB Connection Error:", err);
  });

module.exports = mongoose; 