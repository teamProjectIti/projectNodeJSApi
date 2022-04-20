//updateUser

const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");
const userMode= require("../Models/user");
function updateUser(id, firstName) {
    var newUser = userMode.findOneAndUpdate({ _id: id }, { FirstName: firstName });
    return newUser;
  }
  //createUser
  function createUser({ FirstName,lastName,password, Address,City, products}) {
    return  userMode.create({ FirstName,lastName,password, Address,City, products});
    }
    
//salwa's sol
function fineOnebyid(id) {
    var user = userModel.find({ _id: id });
    return user;
  }
  //get all 
  function findUsers(){
    let User=userMode.find({});
       return User;
    }

    //get by name
  function fineOne(name) {
    var user = userMode.findOne({ name: name });
    return user;
  }

  //login
  async function login({ FirstName, password }) {
    var user = await userMode.findOne({  FirstName: FirstName });
    if (user) {
      var valid = await bcrypt.compare(password, user.password);
      if (valid) {
        return jwt.sign(
          {
            name: user.FirstName,
            id: user._id,
          },
          "w6ef77fe7eew6f7ew67",
          { expiresIn: "1h" }
        );
      } 
    }
   // else {
    //     res.status(401).end();
    //   }
    // } else {
    //   res.status(422).end();
    // }
  }

  module.exports = {findUsers, fineOne, createUser, updateUser, login,fineOnebyid};