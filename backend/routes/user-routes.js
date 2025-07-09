const user=require("../db/user");
const express=require("express");
const router=express.Router();
const {getuser,postuser}=require("../handlers/user-handler");

router.get("",async (req,res)=>{
    let result= await getuser();
    res.send(result);
})

router.post("",async (req,res)=>
{
    let result=req.body;
    res.send(await postuser(result));
})


module.exports=router;