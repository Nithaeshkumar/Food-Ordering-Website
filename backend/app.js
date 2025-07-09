const expros=require("express");
const mongoose=require("mongoose");
const categoryroutes = require("./routes/category-routes");
const userroutes=require("./routes/user-routes");
const app=expros();

app.use(expros.json());

app.use("/category",categoryroutes);
app.use("/user",userroutes);

async function connectdb() {
    await mongoose.connect("mongodb://localhost:27017",{
        dbName:"project"
    })
}

connectdb().catch((err)=>
{
    console.log(err);
})

app.listen(3000,()=>
{
    console.log("app running in port",3000);
})