const Express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
require("./Server");
const App = Express();
App.use(bodyparser());

App.use(cors());
// App.use((req,res,next)=>
// {console.log('hi')
// next()}
// )
const userRouter = require("./Router/userRouter");
App.use("/user", userRouter);
mongoose.connect(process.env.DB).then(() => console.log("connect"));
const ProductRouter = require("./Router/ProductRouter");
App.use("/product", ProductRouter);

const AffiliateRouter = require("./Router/AffiliateRouter");
App.use("/Affiliate", AffiliateRouter);

const port = 8000;
App.listen(port, () => {
  console.log(`listing on port  ${port}`);
});
