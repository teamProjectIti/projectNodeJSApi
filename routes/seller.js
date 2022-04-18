const express=require('express');
var router =express.Router();
const bycrpt=require("bcrypt");



const {
    findsellers,
    findseller,
    createseller,
    updateseller,
    deleteseller
    
   
  } = require("../Controllers/seller");


  router.get("/",async(req,res,next)=>{
    var sellers= await findsellers();
    res.json(sellers);
    })
    
    router.get("/:id",async(req,res,next)=>{
        var {id}= req.params;
        var seller=await findseller(id);
        res.status(201).json(seller);
        })

router.post("/" ,async(req, res, next) => {
      
    
  
    var seller=await createseller(req.body);
  
    res.json(seller);
    
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

module.exports=router;  