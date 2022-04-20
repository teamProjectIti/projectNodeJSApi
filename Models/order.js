const mongoose = require('mongoose');
// const bcrypt=require('bcryptjs');

const orderSchema=mongoose.Schema({
     
    Totalprice:{
        type:Number,
        required:[true,'must be enter price'],
    }, 
     
    createdAt:{
        type:Date,
        default:Date.now
    },
       USerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        required: true,
      },
      products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "product",
        required: true,
      }],
});

let orderModel=mongoose.model("order",orderSchema);
module.exports=orderModel;