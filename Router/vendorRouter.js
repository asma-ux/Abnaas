const express=require('express')
const vendorController=require('../controller/vendorController')
const Router=express.Router();
Router.route('/').post(vendorController.Vendor)
.get(vendorController.findVendor)



module.exports=Router

