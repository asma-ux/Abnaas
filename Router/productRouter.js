const express = require("express");
const multer = require("multer");
const productController = require("../controller/productController");
const Router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./Abnaas/public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

Router.route("/")
  .post(upload.single("image"), productController.products)
  .get(productController.findproduct);

Router.route("/:id")
  .get(productController.getfind)
  .delete(productController.deleteProduct);

module.exports = Router;
