const express = require("express");
var router = express.Router();
const Auth=require('../MiddleWare/Auth')
const {findProducts, createproduct ,fineOneByName ,updateProduct ,removeById,fineOneBySellerName } =require("../Controllers/Product")
// const {
//   findProducts,
//     fineOneByName,
//   createproduct,
//   updateProduct,
//   removeById
// }=require("../Controllers/ProductController");

// router.get("/", async (req, res, next) => {
//     var products = await findProducts();
//     if (products) {
//       res.json(products);
//     } else {
//       res.json({ message: "products not found" });
//     }
//   });









 


 



 
 
  router.use(Auth)
  router.get("/:Name", async (req, res, next) => {
    var { Name } = req.params;
  
    var product = await fineOneByName(Name);
  
    res.status(201).json(product);
  });
  module.exports=router;  
  