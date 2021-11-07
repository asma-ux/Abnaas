const express = require("express");
const products = require("../controllers/productController");
const router = express.Router();

const vendorController = require("../controllers/vendorController");

// router.route('/').post(vendorController.Vendor).get(vendorController.findVendor);

router.route("/:id").get(vendorController.findoneVendor);

// New routes Structure
router
  .route("/")
  .get(vendorController.getAllVendorList)
  .post(vendorController.Vendor);

router
  .route("/:id/products")
  .get(vendorController.getVendorProducts)
  .post(products.postNewProduct);

router.get("/:id/products/sales", vendorController.getAllVendorSales);

router.get("/:id/products/total", vendorController.getAllVendorList);

module.exports = router;
