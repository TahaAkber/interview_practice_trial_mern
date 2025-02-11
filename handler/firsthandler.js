const contoller = require("../controller/controller");
const User = require("../models/USER");

async function Getallusershanlder(req, res) {
  const result = await contoller.Getallusers();
  console.log(result);
  res.send(result);
}

async function Signuphandler(req, res) {
  const data = req.body;

  console.log(data, "DATA");
  // const checkUser = await User.findOne({ email: data.email });
  // if (checkUser) {
  //   res.send("User already exists");
  // } else {

  // }
}

module.exports = { Getallusershanlder, Signuphandler };
