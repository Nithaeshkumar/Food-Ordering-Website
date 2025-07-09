const mongoose=require("mongoose");
const categoryschema=new mongoose.Schema(
    {
        id:Number,
        name:String,
        image_url:String
    }
)

const category=mongoose.model("category",categoryschema);

module.exports=category;
