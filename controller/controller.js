const bcrypt = require("bcrypt");
const Admin = require("../models/ADMIN");
const User = require("../models/USER");
const jwt = require("jsonwebtoken");
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
      const signedpassword = await bcrypt.hash(data.password, 10);
      const user = new User({
        name: data.name,
        email: data.email,
        password: signedpassword,
        role: data.role,
      });
      const result = await user.save();
      console.log("User created successfully");
      return { result, message: "User created successfully" };
    }
  } else if (data.role === "admin") {
    if (isAdmin) {
      console.log("Admin already exists");
      return "Admin already exists";
    } else {
      const signedpassword = await bcrypt.hash(data.password, 10);
      const admin = new Admin({
        name: data.name,
        email: data.email,
        password: signedpassword,
        role: data.role,
      });
      const result = await admin.save();
      return { result, message: "Admin created successfully" };
    }
  }
}

async function login(data) {
  if (data.role === "user") {
    const finduser = await User.findOne({ email: data.email });

    if (!finduser) return null;

    const passwordVerified = await bcrypt.compare(
      data.password,
      finduser.password
    );

    if (!passwordVerified) return null;
    const token = jwt.sign(
      { id: finduser._id, email: finduser.email, role: finduser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return { user: finduser, token };
  } else if (data.role === "admin") {
    const findadmin = await Admin.findOne({ email: data.email });

    if (!findadmin) return null;

    const passwordVerified = await bcrypt.compare(
      data.password,
      findadmin.password
    );

    if (!passwordVerified) return null;
    const token = jwt.sign(
      { id: findadmin._id, email: findadmin.email, role: findadmin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { admin: findadmin, token };
  }
}
module.exports = { Getallusers, Signup, login };
