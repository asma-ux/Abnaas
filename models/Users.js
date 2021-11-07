const Mongoose=require('mongoose')

const userSchema = Mongoose.Schema({
    userName:{
        type:String
    },
    Email:{
        type:String
    },
    password:{
        type:Number
    },
    ConfirmPassword:{
type:Number
    },
})

const userModel = Mongoose.model('user',userSchema);

module.exports =userModel