const Mongoose=require('mongoose')

const AffiliateSchema = Mongoose.Schema({
    FullName:{
        type:String
    },
    Phone:{
        type:Number
    },
    Email:{
        type:String
    },
  
    Address:{
        type:String
    },

})

const AffiliateModel = Mongoose.model('AffiliateInfo',AffiliateSchema);

module.exports =AffiliateModel