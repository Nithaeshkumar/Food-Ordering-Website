const category=require("../db/category");

async function getcategory()
{
    let categories=await category.find();
    return categories.map((c)=>c.toObject());
}

async function postcategory(c)
{
    let Category=new category(
        {
            id:c.id,
            name:c.name,
            image_url:c.image_url
        }
    )
    Category.save();

}

module.exports={getcategory,postcategory};