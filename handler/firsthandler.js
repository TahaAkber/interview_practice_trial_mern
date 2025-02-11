const controller = require("../controller/controller");

async function Getallusershanlder(req, res) {
  const result = await controller.Getallusers();
  console.log(result);
  res.send(result);
}

async function Signuploginhandler(req, res) {
  const data = req.body;

  if (data.method === "signup") {
    try {
      const result = await controller.Signup(data);
      res.send(result);
      console.log(result);
    } catch (e) {
      console.log("Cannot signUp handler -> Signuploginhandler", e);
    }
  } else if (data.method === "login") {
    try {
      const result = await controller.login(data);
      res.send(result);
    } catch (e) {
      console.log("Cannot login handler -> Signuploginhandler", e);
    }
  }
}

module.exports = { Getallusershanlder, Signuploginhandler };
