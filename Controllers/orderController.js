const ordreMode=require("../Models/order");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

function findOrder(){
let order=ordreMode.find({});
   return order;
}
function fineOne(id) {
   var order = ordreMode.findOne({ _id: id });
   return order;
 }
 function deleteOrder(id)
  {
    ordreMode.findOneAndRemove({_id: id },
      function (err, docs) {
        return docs ;
      });
  }
  function createOrder({Totalprice,createdAt,USerId,products}) {

    return  ordreMode.create({Totalprice,createdAt,USerId,products});

    }

   //function update
   function updateOrder(id, name){
      var newUser = userMode.findOneAndUpdate({ _id: id }, { name: name });
      return newUser;
   }
  
module.exports ={findOrder,createOrder,updateOrder,fineOne,deleteOrder}