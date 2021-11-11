const Express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
require("./Server");
const App = Express();
App.use(bodyparser());
require("./Server");
App.use(cors());
// App.use((req,res,next)=>
// {console.log('hi')
// next()}
// )

mongoose.connect(process.env.DB).then(() => console.log("connect"));

// routes variable
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/ProductRouter");
const affiliateRouter = require("./routes/AffiliateRouter");
const vendorRouter = require("./routes/vendorRouter");
const categoryRouter = require("./routes/categoryRouter");
const orderRouter = require("./routes/orderRouter");

// routes middleware
App.use("/users", userRouter);
App.use("/products", productRouter);
App.use("/affiliate", affiliateRouter);
App.use("/vendor", vendorRouter);
App.use("/category", categoryRouter);
App.use("/orders", orderRouter);

App.use(Express.static("Abnaas/build"));
App.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "Abnaas", "build", "index.html"));
});

const PORT = process.env.PORT;
App.listen(PORT, () => {
  console.log(`listing on port  ${PORT}`);
});
