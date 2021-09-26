const express=require('express')
const productController=require('../controller/productController')
const Router=express.Router();
Router.route('/').post(productController.products).get(productController.findproduct)



module.exports=Router

