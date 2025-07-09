const user=require("../db/user");


async function getuser() {
    let users=await user.find();
    return users.map((c)=>c.toObject());
}

async function postuser(c) {
    let  User=new user(
        {
            name:c.name,
            emai:c.email,
            password:c.password,
            isadmin:c.isadmin
        }
    )
    await User.save(); 
    return "sucess";
}

module.exports={getuser,postuser};