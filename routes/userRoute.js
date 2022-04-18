const express=require('express');

var router =express.Router();
// const fs=require('fs');

const {findUsers,createUser,updateUser,fineOne,login}=require('../controllers/userController')
// httpGet 
router.get("/",async(req,res,next)=>{
let data=await findUsers();
res.json(data);
});
//get user by id
 router.get("/:name", async (req, res, next) => {
  var { name } = req.params;

  var user = await fineOne(name);

  res.status(201).json(user);
});

router.patch("/:id", (req, res, next) => {
  var { id } = req.params;
  var { name } = req.body;

  updateUser(id, name)
    .then(() => {
      res.status(200).json({ message: "user updated successfully" });
    })
    .catch((err) => {
      res.status(422).json(err);
    });
});

//funcation Delete
router.delete("/:id",async(req, res, next)=>{
  var { id } = req.params;
  let users=await findUsers();

  var alldata = users.filter((data)=> data.id != id);
  let user=await  createUser(alldata);
  res.json(user);
});
// httpPost
router.post("/",async(req,res,next)=>{

    let body=req.body;
    // console.log(body);
  let user=await  createUser(body);
    res.json(user);

});
router.get("/",async(req,res,next)=>{

});
//funcation login 
router.post("/login", async (req, res, next) => {

   var token = await login(req.body);
   res.json({ token: token });
});
module.exports=router;  
