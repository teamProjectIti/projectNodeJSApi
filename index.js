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

//traditional connection 
// mongoose.connect("mongodb://localhost:27017/Ecommerce2",()=>{
//   console.log("conected to db")
// })

//azza's connection
const username = "azzabahaa";
const password = "vNxwKn6KRc_Vst3";
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.uqyht.mongodb.net/Ecommerce?retryWrites=true&w=majority`,()=>{
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
const sellerRoutes=require("./routes/sellerRout");
const ProductRoutes=require("./routes/ProductRout");
const orderRoute=require("./routes/orderRoute");
const userRoutes=require("./routes/userRoute");

// const UserRoutes=require("./routes/userRoute");
// app.use("/users",UserRoutes);
app.use("/user",userRoutes);
app.use("/seller",sellerRoutes);
app.use("/product",ProductRoutes);
app.use("/order",orderRoute);


//test data 
// {
//   "FirstName": "play",
//  "LastName": "play",

//  "password":"ok",

//  "Address":"okay",


//  "City":"30-4-2020",

//  "products":"30-5-2001"

// }