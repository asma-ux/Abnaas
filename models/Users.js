const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
  userName: {
    type: String,
  },
  Email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ConfirmPassword: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["admin", "user", "vendor"],
    default: "user",
  },
  product: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
});

const userModel = Mongoose.model("user", userSchema);

module.exports = userModel;
