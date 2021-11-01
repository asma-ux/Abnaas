const Mongoose=require('mongoose')

const userSchema = Mongoose.Schema({
    userName:{
        type:String
    },
    password:{
        type:Number
    }
})

const userModel = Mongoose.model('user',userSchema);

module.exports =userModel