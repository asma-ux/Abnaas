const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema({
  fullname: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  compnay: {
    type: String,
  },
  address: {
    type: String,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  sales: {
    type: Number,
    default: 0,
  },
});

const vendorModel = mongoose.model("Vendor", vendorSchema);

module.exports = vendorModel;
