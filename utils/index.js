const { JWT_SECRET } = require("../ENV_VARIABLES");
const jwt = require("jsonwebtoken");

const generageToken = async (data) => {
  return await jwt.sign(data, JWT_SECRET, { expiresIn: "7d" });
};
module.exports = { generageToken };
