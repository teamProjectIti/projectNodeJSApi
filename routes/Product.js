const express = require("express");
var router = express.Router();
const fs = require("fs");


const {
    findProducts,
    fineOneByName,
  createproduct,
  updateProduct,
  removeById,

  
} = require("../Controllers/Product");

// router.get("/", async (req, res, next) => {
//     var products = await findProducts();
//     if (products) {
//       res.json(products);
//     } else {
//       res.json({ message: "products not found" });
//     }
//   });



router.get("/", async (req, res, next) => {

  var products = await findProducts();

  var query=req.query.sellername;
  console.log(query);
  
  if(query != undefined)

  {

    try{

      var sellerproducts=await fineOneBySellerName(query);

      res.json(sellerproducts);

    }

    catch(err)

    {

      return res.status(401).end();

    }



  }

  else

  {

    if (products) {

      res.json(products);

    }

    else {

      res.json({ message: "products not found" });

    }

  }



});


router.post("/", async (req, res, next) => {
    var body = req.body;
    try {
      var product = await createproduct(body);
  
      res.json(product);
    } catch (err) {
      res.status(422).json({ err });
    }
  });


  router.get("/:Name", async (req, res, next) => {
    var { Name } = req.params;
  
    var product = await fineOneByName(Name);
  
    res.status(201).json(product);
  });


  router.patch("/:Name", (req, res, next) => {
    var { Name } = req.params;
    var product=req.body;
    //{ createdAt } = req.body;
  
    updateProduct(Name, createdAt)
      .then(() => {
        res.status(200).json({ message: "product updated successfully" });
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  });



  router.delete("/:productName",async (req,res,next)=>{
    var {productName}=req.params;
    try{
      await removeById(productName);
      res.json("Product Deleted Successfully");
    }
    catch(err)
    {
      res.status(422).json(err);
    }
   
  });
  module.exports=router;  
  