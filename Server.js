const Mongoose=require('mongoose')


const Db=process.env.DB.replace("<password>",process.env.DB_PASSWORD)
Mongoose.connect(Db).then(()=>{console.log("connect");}).catch((e)=> console.log(e))