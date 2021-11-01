const express=require('express')
const AffiliateController=require('../controller/AffiliateController')
const Router=express.Router();
Router.route('/').post(AffiliateController.Affiliate)
.get(AffiliateController.findAffiliate)



module.exports=Router

