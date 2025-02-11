const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "admin", enum: ["user", "admin"] },
});

const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;
