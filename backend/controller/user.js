const { json } = require("express");
const { User } = require("../model/userSchema");

module.exports.signup = async (req, res, next) => {
  console.log(req.body);
  let { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    res.status(404).json({ message: "user already exist with this email Id" });
  } else {
    let newuser = new User({ name, email, password });
    await newuser.save();

    res.status(200).json({
      message: `welcome to your community , ${name} ! `,
      user: { id: newuser._id, name: newuser.name },
    });
  }
};
module.exports.login = async (req, res, next) => {
  console.log(req.body);
  let { email, password } = req.body;
  let user = await User.findOne({ email, password: password });

  if (user) {
    res.status(200).json({
      message: `Welcome Back ${user.name}!`,
      user: { id: user._id, name: user.name },
    });
  } else {
    res.status(500).json({ message: "Wrong credentail ,Try again!" });
  }
};
