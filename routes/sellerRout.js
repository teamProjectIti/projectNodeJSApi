const express=require('express');
const Auth=require('../MiddleWare/Auth')
var router =express.Router();

const bycrpt=require("bcrypt");
const {
    findsellers,
    findseller,
    createseller,
    updateseller,
    deleteseller,
    findsellerbyname,
    login
  } = require("../Controllers/sellerController.js");
  const {
    createproduct ,
    updateProduct,
    removeById,
    findProducts
  }=require("../Controllers/Product.js");

  const {
    createOrder
  }=require("../Controllers/orderController.js");
  router.post("/login", async (req, res, next) => {
    var token = await login(req.body);
    res.json({ token: token });
 });

//  router.get("/",async(req,res,next)=>{
//   var sellers= await findsellers();
//   res.json(sellers);
//   })
router.post("/" ,async(req, res, next) => {
  var seller=await createseller(req.body);
  res.json(seller);
  
});
  router.use(Auth)
 
    router.post("/addproduct", async (req, res, next) => {
      var body = req.body;
      try {
        var product = await createproduct(body);
    
        res.json(product);
      } catch (err) {
        res.status(422).json({ err });
      }
    });

    //Edit
    router.patch("/:id/:pid", (req, res, next) => {
      var { id } = req.params;
      var { pid } = req.params;
      var product=req.body;
      //{ createdAt } = req.body;
      // var { _id } = req.headers;
      updateProduct(id,pid,product)
      // res.json(_id)
        .then(() => {
          res.status(200).json({ message: "product updated successfully" });
        })
        .catch((err) => {
          res.status(422).json(err);
        });

    });
    //create order
    router.post("/",async(req,res,next)=>{

      let body=req.body;
      // console.log(body);
    let order=await  createOrder(body);
      res.json(order);
  });

    // router.get("/:id",async(req,res,next)=>{
    //     var {id}= req.params;
    //     var seller=await findseller(id);
    //     res.status(201).json(seller);
    //     })



//delete
  router.delete("/:id",async (req,res,next)=>{
    var {id}=req.params;
    try{
      await removeById(id);
      res.json("Product Deleted Successfully");
    }
    catch(err)
    {
      res.status(422).json(err);
    }
  });

//Get
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

  router.patch("/:id", async(req, res, next) => {
    var { id } = req.params;
    var seller = req.body;
   
  updateseller(id,seller).then(()=>{
      res.status(200).json({message:"user was edited successfully"})
  }).catch((err)=>{
      res.status(422).json(err)
  })
   
  
  
    
  });
  router.delete("/:id",async (req, res, next) => {
    var { id } = req.params;
    
    
    var user = await deleteseller(id);
   
    res.json(user);
  });
  router.get("/:name",async(req,res,next)=>{
      var {FirstName}= req.params;
      var seller=await findsellerbyname(FirstName);
      res.status(201).json(seller);
      })
module.exports=router;  