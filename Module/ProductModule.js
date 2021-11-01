const mongoose = require("mongoose");

const ProductSchama = mongoose.Schema({
  Name: {
    type: String,
  },
  Price: {
    type: Number,
  },

  Commission: {
    type: Number,
  },

  Quantity: {
    type: Number,
  },
  Category: {
    type: String,
  },
  Description: {
    type: String,
  },

  Image: {
    type: String,
  },

  CompanyName: {
    type: String,
  },

  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  Vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vendorInfo",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const ProductModule = mongoose.model("Product", ProductSchama);
module.exports = ProductModule;
