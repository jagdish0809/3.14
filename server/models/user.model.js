const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    phrase: { type: String, required: true },
  },
  { collection: "user-data" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
