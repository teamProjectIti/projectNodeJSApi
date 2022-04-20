const sellermodel = require('../Models/seller')
const bycrpt = require("bcrypt");
 const jwt=require("jsonwebtoken");
const res = require('express/lib/response');

function findsellers() {
    var sellers = sellermodel.find({});
    return sellers;
}

function findseller(id) {
    var seller = sellermodel.findOne({ _id: id });
    return seller;
}

function findsellerbyname(name) {
    var seller = sellermodel.findOne({ FirstName: name });
    return seller;
}

function createseller({ FirstName, lastName, Address, password }) {
    var seller = sellermodel.create({ FirstName, lastName, Address, password })
    return seller;
}


async function login({ FirstName, password }) {
    var seller = await sellermodel.findOne({ FirstName: FirstName });
    if (seller) {
      var valid = await bycrpt.compare(password, seller.password);
      if (valid) {
        return jwt.sign(
          {
            name: seller.FirstName,
            id: seller._id,
          },
          "w6ef77fe7eew6f7ew67",
          { expiresIn: "1h" }
        );
      }
    }
    //    else {
    //     res.status(401).end();
    //   }
    // } else {
    //   res.status(422).end();
    // }
  }


function updateseller(id,seller){

    var newseller= sellermodel.findOneAndUpdate({_id:id},seller)
 return newseller;
 }
 function deleteseller(id){
    var user=sellermodel.deleteOne({_id:id})
    return user;
}

module.exports = { findsellers,findseller, createseller,updateseller ,deleteseller,findsellerbyname,login};
//data 
// {
//     "Name": "laptop",
  
//    "description":"wow" ,
//    "photo":"wow",
//    "price":2000,
//    "quantity" :3,
//    "createdAt " : "2020-3-3"
  
//  }