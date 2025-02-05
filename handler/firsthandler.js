const contoller = require("../controller/controller");

async function taha(req, res) {
  const result = await contoller.taha();
  res.send(result);
}

module.exports = { taha };
