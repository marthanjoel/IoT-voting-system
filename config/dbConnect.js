const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    // mongoose.set("strictQuery", false);
  } catch (error) {}
};

module.exports = dbConnect;
