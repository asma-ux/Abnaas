const producModel=require('../module/productModule')
exports.products= async(req,res)=>{
    try{
    await producModel.create(
   {
    Name:"Shoose",
    Price:90,
    qty:9,
    User:"614ad616ce84373762a3ace0"
   }    )

    res.status(200).json({
        message:"all products",
        
        
    })}
    catch(e){
        console.log(e.message);
    }
   }


   

   exports.findproduct=async(req,res)=>{
    try{
        const product = await producModel.find({user:req.params.id}).populate('User')
    
            res.status(200).json({
                message:"Foud",
                data:product
                
            })}
            catch(e){
                console.log(e.message);
            }
        }