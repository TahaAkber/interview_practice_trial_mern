const express = require("express");
const app = express();
const cors = require("cors");
const { routes } = require("./routes/routes");
const { connectDB } = require("./connection/index");
cors();
app.use(express.json());
connectDB().then(() => {
  console.log("Connected to MongoDB");
});

routes.forEach(({ method, path, handler }) => {
  app[method](path, handler);
});
app.listen(3001, () => {
  console.log("app is working at ", 3001);
});
