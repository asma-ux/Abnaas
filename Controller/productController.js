const producModel=require('../module/productModule')
exports.products= async(req,res)=>{
    try{
    await producModel.create(
   req.body
       
    )

    res.status(200).json({
        message:"all products",
        
        
    })}
    catch(e){
        console.log(e.message);
    }
   }


   

   exports.findproduct=async(req,res)=>{
    try{
        const product = await producModel.find({User:req.params.id}).populate('User')
    
            res.status(200).json({
                message:"Foud",
                data:product
                
            })}
            catch(e){
                console.log(e.message);
            }
        }