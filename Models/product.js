const mongoose = require('mongoose');
// const bcrypt=require('bcryptjs');

const productSchema=mongoose.Schema({
    
    Name:{
        type:String,
        required:true,
         minlength:3,
         maxlength:200,
         unique:true,
         trim:true
        },
    description:{
        type:String,
        maxlength:200,
        minlength:3,
        required:true,
        trim:true,
    },
    photo:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,'must be enter price'],
        trim:true,
    }, 
    quantity:{
        type:Number,
        required:[true,'must be enter quantity'],
    },
    createdAt:{
        type:Date,
        default:Date.now,
        trim:true,
    },
    SellerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "seller",
        required: true,
        trim:true,
      },
       Users: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
       }]
});
var productModel=mongoose.model("product",productSchema);
module.exports=productModel;