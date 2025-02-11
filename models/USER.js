const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user", enum: ["user", "admin"] },
  method: { type: String, enum: ["signup", "login"] },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
