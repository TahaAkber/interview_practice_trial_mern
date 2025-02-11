const Admin = require("../models/ADMIN");
const User = require("../models/USER");
async function Getallusers(req, res) {
  const result = await User.find();
  return result;
}

async function Signup(data) {
  const isUser = await User.findOne({ email: data.email });
  const isAdmin = await Admin.findOne({ email: data.email });
  if (data.role === "user") {
    if (isUser) {
      console.log("User already exists");
      return "User already exists";
    } else {
      const user = new User(data);
      const result = await user.save();
      console.log("User created successfully");
      return { result, message: "User created successfully" };
    }
  } else if (data.role === "admin") {
    if (isAdmin) {
      console.log("Admin already exists");
      return "Admin already exists";
    } else {
      const admin = new Admin(data);
      const result = await admin.save();
      return { result, message: "Admin created successfully" };
    }
  }
}

async function login(data) {
  if (data.role === "user") {
    const finduser = await User.findOne({}).where({
      email: data.email,
      password: data.password,
    });
    return finduser;
  } else if (data.role === "admin") {
    const findadmin = await Admin.findOne({}).where({
      email: data.email,
      password: data.password,
    });
    return findadmin;
  }
}
module.exports = { Getallusers, Signup, login };
