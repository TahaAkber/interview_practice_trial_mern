const handler = require("../handler/firsthandler");

const routes = [
  {
    method: "get",
    path: "/",
    handler: handler.taha,
  },
];
module.exports = { routes };
