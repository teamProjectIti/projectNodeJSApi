const express=require('express');

var router =express.Router();
// const fs=require('fs');

const {findOrder,createOrder,updateOrder,fineOne,deleteOrder}=require('../controllers/order')
 
// httpGet 
router.get("/",async(req,res,next)=>{
var data=await findOrder();
res.json(data);
});

//get user by id
 router.get("/:id", async (req, res, next) => {
  var { id } = req.params;

  var order = await fineOne(id);

  res.status(201).json(order);
});


router.patch("/:id", async(req, res, next) => {
  var { id } = req.params;
  var order = req.body;

  updateOrder(id, order)
    .then(() => {
      res.status(200).json({ message: "Order updated successfully" });
    })
    .catch((err) => {
      res.status(422).json(err);
    });
});

router.delete("/:id",async(req, res, next)=>{
  var { id } = req.params;
 var order= await  deleteOrder(id) 
  res.json(order)
});
// httpPost
router.post("/",async(req,res,next)=>{

    var body=req.body;
   
  var order=await  createOrder(body);
    res.json(order);
});

module.exports=router;  
