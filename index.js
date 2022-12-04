// Imports
const express = require("express");
const { loggerMiddleware } = require("./middleware/logger");
const { errHandlerMiddleware } = require("./middleware/errHandler");
require("dotenv").config();
const app = express();

// Middlewares
app.use(loggerMiddleware); // logger

// Routes

// Middlewares
app.use(errHandlerMiddleware);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
