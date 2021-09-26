const Mongoose=require('mongoose')

const vendorSchema = Mongoose.Schema({
    FullName:{
        type:String
    },
    Phone:{
        type:Number
    },
    Email:{
        type:String
    },
    Company:{
        type:String
    },
    Address:{
        type:String
    },

})

const vendorModel = Mongoose.model('vendorInfo',vendorSchema);

module.exports =vendorModel