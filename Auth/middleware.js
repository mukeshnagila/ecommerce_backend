// middleware.js
const jwt = require('jsonwebtoken');
const secret_key = 'Mukesh';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ code: 403, message: 'Forbidden - Token not provided' });
  }

  try {
    const token2 = token.split(" ")[1];
    const decoded = jwt.verify(token2, secret_key);
    req.user = decoded; // Attach user information to the request object
    next();
  } catch (error) {
    return res.status(403).json({ code: 403, message: 'Forbidden - Invalid token' });
  }
};

module.exports = authMiddleware;




// const jwt = require("jsonwebtoken");
// const secret_key = "Mukesh";

// const authmiddleware = async(req, res, next) => {
//   const BearerToken = req.headers["authorization"];

//   if (BearerToken) {
//     const token = BearerToken.split(" ")[1];
//     const validate = jwt.verify(token, secret_key);
//     if (validate) {
//       return next();
//     }
//     return res.send({ msg: "user is not authorized" });
//   }
//   return res.send({ msg: "user is not allowed" });
// };

// module.exports = authmiddleware;


// const jwt = require("jsonwebtoken");
// const secret_key = "Mukesh";

// const authmiddleware = async (req, res, next) => {
//   const BearerToken = req.headers["authorization"];

//   if (BearerToken) {
//     const token = BearerToken.split(" ")[1];

//     try {
//       const validate = jwt.verify(token, secret_key);
//       if (validate) {
//         next();
//       } else {
//         return res.status(401).send({ msg: "User is not authorized" });
//       }
//     } catch (error) {
//       return res.status(401).send({ msg: "Invalid token" });
//     }
//   } else {
//     return res.status(401).send({ msg: "User is not allowed" });
//   }
// };

// module.exports = authmiddleware;
