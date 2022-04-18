const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema=mongoose.Schema({
    FirstName:{
        type:String,
        maxlength:10,
        minlength:3,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
         minlength:3,
         maxlength:15,
        },
    password:{
        type:String,
        maxlength:40,
        minlength:3,
        require:true,
    },
    Address:{
        type:String,
        required:true,
    }, 
    City:{
        type:String,
        required:true,
    }, 
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "product",
       }],
});


userSchema.pre('save',function(){

    var salt = bcrypt.genSaltSync(10);
   this.password = bcrypt.hashSync(this.password, salt);
});

var userModel=mongoose.model("User",userSchema);
module.exports=userModel;