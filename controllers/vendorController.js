const Vendor = require("../models/Vendor");

exports.Vendor = async (req, res) => {
  try {
    await Vendor.create(req.body);
    res.status(200).json({
      message: "Vendor",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.findVendor = async (req, res) => {
  try {
    const getVender = await Vendor.find({});
    res.status(200).json({
      message: "found",
      userVendor: getVender,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.findoneVendor = async (req, res) => {
  try {
    const getVender = await Vendor.findById(req.params.id);
    res.status(200).json({
      message: "found",
      userVendor: getVender,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

// New Controller Structure
module.exports.getVendorProducts = async (req, res) => {
  const { id } = req.params;

  const vendor = await Vendor.findById(id)
    .populate("products")
    .then((vendor) => {
      if (!vendor) {
        return res.status(403).send({ message: "Sorry, Vendor not found!" });
      }
      res.status(200).send({
        message: "Successfully fetch",
        totalProducts: vendor.products.length,
        products: vendor.products,
      });
    })
    .catch((err) => {
      res.send({
        message: "something went wrong",
        errMsg: err.message,
        err: err,
      });
    });
};

module.exports.getAllVendorSales = async (req, res) => {
  const { id } = req.params;

  const vendor = await Vendor.findById(id).populate("products");

  if (!vendor) {
    return res.status(403).send({ message: "Sorry, Vendor not found!" });
  }

  res
    .status(200)
    .send({ message: "Success fetch total sales", totalSales: vendor.sales });
};

module.exports.getTotalVendorProducts = async (req, res) => {
  const { id } = req.params;

  const vendor = await Vendor.findById(id)
    .populate("products")
    .then((vendor) => {
      if (!vendor) {
        return res.status(403).send({ message: "Sorry, Vendor not found!" });
      }
      res.status(200).send({
        message: "Successfully fetch",
        totalProducts: vendor.products.length,
      });
    })
    .catch((err) => {
      res.send({
        message: "something went wrong",
        errMsg: err.message,
        err: err,
      });
    });
};

module.exports.getAllVendorList = async (req, res) => {
  console.log("get all vendor list running...");
  const vendors = await Vendor.find({});

  res.send({
    message: "Success fetch all vendors",
    totalVendors: vendors.length,
    vendors,
  });
};
