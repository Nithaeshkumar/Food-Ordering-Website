const category=require("../db/category");
const express=require("express");
const router=express.Router();
const {getcategory,postcategory}=require("../handlers/category-handler")

router.get("",async (req,res)=>
{
    let result=await getcategory();
    res.send(result);
})



router.post("",(req,res)=>
{
    postcategory(req.body);
    res.send("added succefully");
})

module.exports=router;