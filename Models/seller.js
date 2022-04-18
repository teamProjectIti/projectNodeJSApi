const mongoose = require('mongoose');
 const bcrypt=require('bcrypt');

const SellerSchema=mongoose.Schema({
    FirstName:{
        type:String,
        maxlength:10,
        minlength:3,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
         minlength:3,
         maxlength:15,
        },
    Address:{
        type:String,
        required:true,
        },
    password:{
        type:String,
        minlength:8,
        required:true,
    },
});


SellerSchema.pre('save',function(){

    var salt = bcrypt.genSaltSync(10);
   this.password = bcrypt.hashSync(this.password, salt);
});

var sellerModel=mongoose.model("seller",SellerSchema);
module.exports=sellerModel;