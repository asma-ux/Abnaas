const mongoose = require("mongoose");

const ProductSchama = mongoose.Schema({
  Name: {
    type: String,
  },
  Price: { type: Number },
  qty: {
    type: Number,
  },
  Categort: {
    type: String,
  },
  Description: {
    type: String,
  },

  Image: {
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
});

const ProductModule = mongoose.model("Product", ProductSchama);
module.exports = ProductModule;
