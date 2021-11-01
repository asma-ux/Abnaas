const express = require("express");
const multer = require("multer");
const productController = require("../controller/productController");
const Router = express.Router();
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    console.log(uniqueSuffix);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

Router.route("/")
  .post(upload.single("Image"), productController.products)
  .get(productController.findproduct);

Router.route("/:id")
  .get(productController.getfind)
  .delete(productController.deleteProduct);

module.exports = Router;
