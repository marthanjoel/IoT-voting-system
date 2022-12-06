// Imports
const express = require("express");
const { loggerMiddleware } = require("./middleware/logger");
const { errHandlerMiddleware } = require("./middleware/errHandler");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const mongoose = require("mongoose");
const app = express();

// Middlewares
app.use(loggerMiddleware); // logger
dbConnect();

// Routes

// Middlewares
app.use(errHandlerMiddleware);

const PORT = process.env.PORT || 8001;
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
