const Express=require('express')
const App=Express()
const bodyparser=require('body-parser')

require('dotenv').config({path:"./config.env"})

require('./Server')
App.use(bodyparser())

const userRouter=require('./Router/userRouter')
App.use('/user',userRouter);


const ProductRouter=require('./Router/ProductRouter')
App.use('/product',ProductRouter)


const AffiliateRouter=require('./Router/AffiliateRouter')
App.use('/Affiliate',AffiliateRouter)


const port=process.env.port
App.listen(port,()=>{
    console.log(`listing on port  ${port}` );
})