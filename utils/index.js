const { JWT_SECRET } = require("../ENV_VARIABLES");
const jwt = require("jsonwebtoken");

const generateToken = async (data) => {
  return await jwt.sign(data, JWT_SECRET, { expiresIn: "7d" });
};

const isAuth = (req, res, next) => {
  console.log(req.headers);
  const authorization = req.headers.authorization;
  const token = authorization.slice(7);
  if (authorization) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Token in not provided" });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.json({ message: "No token" });
  }
};
module.exports = { generateToken, isAuth };
