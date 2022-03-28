
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
firstName:{type:String,required:true},
lastName:{type:String,required:false},
email:{type:String,required:true},
password:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
})

userSchema.pre("save", async(req,res,next)=>{
    const hash = bcrypt.hashSync(mthis.password, 7);
    this.password= hash;
    next();
})
// userSchema.models.checkPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// }
User = mongoose.model("user",userSchema);
module.exports = User;