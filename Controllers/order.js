const ordreMode=require("../Models/order");

// const jwt = require("jsonwebtoken");
const res = require('express/lib/response');

function findOrder(){
var order=ordreMode.find({});
   return order;
}
function fineOne(id) {
   var order = ordreMode.findOne({ _id: id });
   return order;
 }
 function deleteOrder(id)
  {
   
      var order=ordreMode.deleteOne({_id:id})
      return order
  }
function createOrder({Totalprice,createdAt,}) {
    return  ordreMode.create({Totalprice,createdAt});
    }

   //function update
   function updateOrder(id, name){
      var newUser = ordreMode.findOneAndUpdate({ _id: id },  name );
      return newUser;
   }
  
module.exports ={findOrder,createOrder,updateOrder,fineOne,deleteOrder}