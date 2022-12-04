// Imports
const express = require("express");
const { loggerMiddleware } = require("./middleware/logger");
require("dotenv").config();
const app = express();

// Middlewares
app.use(loggerMiddleware); // logger

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
