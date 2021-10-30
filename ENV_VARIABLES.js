const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const SALT = process.env.SALT;
const PORT = process.env.PORT;

module.exports = { MONGO_URL, SALT, PORT };
