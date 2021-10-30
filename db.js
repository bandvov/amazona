const mongoose = require("mongoose");
const { MONGO_URL } = require("./ENV_VARIABLES");

const connectToDb = async () => {
  await mongoose.connect(MONGO_URL, { useUnifiedTopology: true });
};

module.exports = { connectToDb };
