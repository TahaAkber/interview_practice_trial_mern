var jwt = require("jsonwebtoken");

const jwttoken = () => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: "foobar",
    },
    "secret"
  );
  return token;
};



module.exports = { jwttoken };
