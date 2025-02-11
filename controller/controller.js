const User = require("../models/USER");
async function Getallusers(req, res) {
  const result = await User.find();
  return result;
}

module.exports = { Getallusers };
