const express = require("express");
const app = express();
const cors = require("cors");
const { routes } = require("./routes/routes");
cors();

routes.forEach(({ method, path, handler }) => {
  app[method](path, handler);
});
app.listen(3001, () => {
  console.log("app is working at ", 3001);
});
