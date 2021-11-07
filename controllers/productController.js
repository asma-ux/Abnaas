const Product = require("../models/Products");
const Vendor = require("../models/Vendor");
const Category = require("../models/Category");

exports.products = async (req, res) => {
  try {
    // console.log(req.file);
    req.body.image = req.file.filename;
    await Product.create(req.body);
    res.status(201).json({
      message: "created product",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.findproduct = async (req, res) => {
  try {
    const product = await Product.find({});

    res.status(200).json({
      message: "Found",
      data: product,
    });
  } catch (e) {
    console.log(e.message);
  }
};

exports.getfind = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      message: "all products",
      data: product,
    });
  } catch (e) {
    res.status(400).json({
      message: e,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "deleted product",
    });
  } catch (e) {
    res.status(400).json({
      message: e,
    });
  }
};

// New Controller Structure
module.exports.postNewProduct = async (req, res) => {
  console.log("Create Product running....");

  const { id } = req.params;
  const vendor = await Vendor.findById(id);
  const category = await Category.findById(id);

  if (!vendor) {
    return res.status().send({ message: "Sorry, Vendor not found" });
  }
  console.log("Vendor Success");

  if (!category) {
    return res.status(403).send({ message: "" });
  }
  const newProduct = new Product(req.body);
  newProduct.vendor = vendor;
  vendor.products.push(newProduct);

  await newProduct.save();
  await vendor.save();

  res
    .status(201)
    .send({ message: "Success created", product: newProduct, zvendor: vendor });
};

module.exports.gelAllProducts = async (req, res) => {
  const products = await Product.find({});

  res.status(201).send({
    message: "Success fetch",
    totalProducts: products.length,
    product: products,
  });
};

exports.update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id);

    res.status(200).json({
      message: "Update",
      data: product,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "deleted product",
    });
  } catch (e) {
    res.status(400).json({
      message: e,
    });
  }
};
