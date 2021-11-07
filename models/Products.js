const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: { type: Number },
  quantity: {
    type: Number,
  },
  description: {
    type: String,
  },
  commission: {
    type: Number,
  },
  image: {
    type: String,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cetegory",
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
  },
});

const ProductModule = mongoose.model("Product", ProductSchema);
module.exports = ProductModule;
