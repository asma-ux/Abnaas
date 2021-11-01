const ProductModule = require("../module/productModule");
const producModel = require("../module/productModule");

exports.products = async (req, res) => {
  try {
    // console.log(req.file);
    req.body.Image = req.file.filename;
    await producModel.create(req.body);
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
    const product = await producModel.find({});

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
    const product = await producModel.findById(req.params.id);

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
    await ProductModule.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "deleted product",
    });
  } catch (e) {
    res.status(400).json({
      message: e,
    });
  }
};
