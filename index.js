const express = require("express");
const fs = require("fs");
var app = express();
const cors=require("cors");
const mongoose=require("mongoose");
 const userModel= require("./Models/user")
 const sellerModel= require("./Models/seller")
 const orderModel= require("./Models/order")
 const productModel= require("./Models/product")

// const http=require("http")
// const socket=require("socket.io")


// var server =http.createServer(app)
// var io=socket(server,{
//   cors:{
//     origin:"*"
//   }
// })

//  io.on("connection",()=>{
//    console.log("connection established")
//  })
mongoose.connect("mongodb://localhost:27017/Ecommerce",()=>{
  console.log("conected to db")
})

 app.use(express.json()); //middleware

//  app.post("/",(req,res)=>{
       
//   io.emit("new_data",req.body)

//  })
// app.use(cors())

 


// app.use("*",(req, res, next) =>{

//   res.status(404).end()
// })

// app.set("view engine","ejs")
// app.set("views",'./views')

// app.use((err,req,res,next) =>{
//   console.log(err);
//  return res.status(500).end()

// })
app.listen(4000, () => {
  console.log("app started listening on port 4000");
});
const sellerRoutes=require("./routes/seller");
const orderRoutes=require("./routes/order");
const productRoutes=require("./routes/Product");

// const UserRoutes=require("./routes/userRoute");
// app.use("/users",UserRoutes);

app.use("/seller",sellerRoutes);
app.use("/order",orderRoutes);
app.use("/product",productRoutes);