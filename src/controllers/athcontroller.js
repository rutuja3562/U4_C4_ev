const User = "../models/user.model.js";
var jwt = require("jsonwebtoken");
require("dotenv").config();
generateToken = (user)=>{
return jwt.sign({user},process.env.secrate_key);
}

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ massege: "email already registerd" });
    }
      user = await User.create(req.body);
      const generateToken = user;
  return res.status(200).send({ user, token});



  } catch (err) {
    res.status(400).send({ massege: err.mess });
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ massege: "wrong email or password" });
    }
 const match = user.checkPassword(req.body.password);
 if(!match){
 return res.status(400).send({ massege: "wrong email or password" });

 }
   user = await User.create(req.body);
   const generateToken = user;
   return res.status(200).send({ user, token });

  } catch (err) {
    res.status(400).send({ massege: err.mess });
  }
};
module.exports={register,login}
