const express=require('express');

var router =express.Router();
// const fs=require('fs');

const {findOrder,createOrder,updateOrder,fineOne,deleteOrder}=require('../Controllers/orderController')
 
// httpGet 
router.get("/",async(req,res,next)=>{
let data=await findOrder();
res.json(data);
});
//get user by id
 router.get("/:id", async (req, res, next) => {
  var { id } = req.params;

  var order = await fineOne(id);

  res.status(201).json(order);
});

router.patch("/:id", (req, res, next) => {
  var { id } = req.params;
  var { products } = req.body;

  updateOrder(id, products)
    .then(() => {
      res.status(200).json({ message: "Order updated successfully" });
    })
    .catch((err) => {
      res.status(422).json(err);
    });
});

//funcation Delete
router.delete("/:id",async(req, res, next)=>{
  var { id } = req.params;
  await  deleteOrder(id) 
  res.status(200).json({ message: "Delete successfully" });
});
// httpPost

module.exports=router;  
