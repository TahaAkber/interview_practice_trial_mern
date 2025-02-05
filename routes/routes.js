const handler = require("../handler/firsthandler");

const routes = [
  {
    method: "get",
    path: "/",
    handler: handler.taha,
  },
  {
    method: "get",
    path: "/about",
    handler: (req, res) => res.send("About Page"),
  },
];
module.exports = { routes };
