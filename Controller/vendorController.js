const vendorModel=require('../module/vendorModule')
exports.Vendor= async(req,res)=>{
    try{
    await vendorModel.create(
   req.body
       
    )
    res.status(200).json({
        message:"Vendor",
                
    })}
    catch(e){
        console.log(e.message);
    }
   }


   exports.findVendor = async (req, res) => {
    try {
      const getVender = await vendorModel.find({});
      res.status(200).json({
        message:"found",
        userVendor:getVender });
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  };