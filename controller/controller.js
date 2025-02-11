const User = require("../models/USER");
async function taha(req, res) {
  const result = await User.find({});
  return result;
}

module.exports = { taha };
