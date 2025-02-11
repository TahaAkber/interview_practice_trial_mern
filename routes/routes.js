const handler = require("../handler/firsthandler");

const routes = [
  {
    method: "get",
    path: "/",
    handler: handler.Getallusershanlder,
  },
  {
    method: "post",
    path: "/signup",
    handler: handler.Signuphandler,
  }
];
module.exports = { routes };
