const User = "../models/user.model.js";
const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ massege: "email already registerd" });
    }
    user = await User.create(req.body);
  return res.status(200).send({ user});

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
  } catch (err) {
    res.status(400).send({ massege: err.mess });
  }
};
module.exports={register,login}
