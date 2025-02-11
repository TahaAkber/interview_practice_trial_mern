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
    handler: handler.Signuploginhandler,
  },
  {
    method: "post",
    path: "/login",
    handler: handler.Signuploginhandler,
  },
];
module.exports = { routes };
