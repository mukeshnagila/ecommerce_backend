const jwt = require("jsonwebtoken");
const secret_key = "Mukesh";
const authmiddleware = async(req, res, next) => {
  const BearerToken = req.headers["authorization"];

  if (BearerToken) {
    const token = BearerToken.split(" ")[1];
    const validate = jwt.verify(token, secret_key);
    if (validate) {
      next();
    }
    return res.send({ msg: "user is not authorized" });
  }
  return res.send({ msg: "user is not allowed" });
};

module.exports = authmiddleware;