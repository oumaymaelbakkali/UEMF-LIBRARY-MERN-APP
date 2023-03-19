const mongoose =require("mongoose");
const userSchema =new mongoose.Schema({
     username:String,
     email: String,
     password: String,
     emailConfirmed: Boolean,
     books:Array
})

const user = new mongoose.model("user",userSchema)
module.exports=user