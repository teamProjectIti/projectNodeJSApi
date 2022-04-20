// const fs = require("fs");
const productModel = require("../Models/product");
const sellerModel= require("../Models/seller");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

function findProducts() {
  var products = productModel.find({}).populate();
  return products;
}
function fineOneByName(Name) {
    var product = productModel.findOne({ Name: Name });
    return product;
  }
  
function createproduct({ Name, description, photo, price, quantity, createdAt, SellerId, Users }) {
    var product = productModel.create({ Name, description, photo, price, quantity, createdAt, SellerId, Users});
    return product;
  }

  function updateProduct(id,pid,product) {
    // var newProduct = productModel.findOneAndUpdate({ _Name: Name },product);
    // return newProduct;
    var newProduct = productModel.findOneAndUpdate({ SellerId:id , _id:pid }, product);
    return newProduct;
  }
  function fineOneBySellerName(FirstName) {
    var seller = sellerModel.findOne({ FirstName:FirstName });
    console.log(seller);
    var products = productModel.find({SellerId : seller._id})
    return products;
  }

  function removeById(id)
  {
    const result = productModel.deleteOne({ SellerId: id });
    
    return result;
  }

  module.exports= { findProducts, createproduct ,fineOneByName ,updateProduct ,removeById,fineOneBySellerName };
