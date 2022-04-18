const sellermodel = require('../Models/seller')
const bycrpt = require("bcrypt");
// const jwt=require("jsonwebtoken");
const res = require('express/lib/response');

function findsellers() {
    var sellers = sellermodel.find({});
    return sellers;
}

function findseller(id) {
    var seller = sellermodel.findOne({ _id: id });
    return seller;
}
function createseller({ FirstName, lastName, Address, password }) {
    var seller = sellermodel.create({ FirstName, lastName, Address, password })
    return seller;
}


function updateseller(id,seller){

    var newseller= sellermodel.findOneAndUpdate({_id:id},seller)
 return newseller;
 }
 function deleteseller(id){
    var seller=sellermodel.deleteOne({_id:id})
    return seller;
}

module.exports = { findsellers,findseller, createseller,updateseller ,deleteseller};
