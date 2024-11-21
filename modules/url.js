const mongoose = require("mongoose");

const newCus = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    phoneno: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const URL = mongoose.model("url", newCus);

module.exports = URL;
