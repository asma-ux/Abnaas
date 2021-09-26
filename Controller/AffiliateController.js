const AffiliateModel=require('../module/AffiliateModule')
exports.Affiliate= async(req,res)=>{
    try{
    await AffiliateModel.create(
   req.body
       
    )
    res.status(200).json({
        message:"Affiliate",
                
    })}
    catch(e){
        console.log(e.message);
    }
   }


   exports.findAffiliate = async (req, res) => {
    try {
      const getVender = await AffiliateModel.find({});
      res.status(200).json({
        message:"found",
        userVendor:getVender });
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  };