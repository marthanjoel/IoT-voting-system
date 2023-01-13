// Imports
const express = require("express");
const { loggerMiddleware, logger } = require("./middleware/logger");
const { errHandlerMiddleware } = require("./middleware/errHandler");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const mongoose = require("mongoose");
var cors = require("cors");
const { identify } = require("./middleware/identify");
const app = express();

// Middlewares
app.use(cors());
app.use(loggerMiddleware); // logger
dbConnect();

// Routes
app.use("/", require("./route/root"));
app.use("/match/rfid", require("./route/rfidMatch"));
app.use("/cast-vote", require("./route/cast-vote"));
app.use("/getparty", require("./route/getParty"));
app.use("/getvoter", require("./route/getVoter"));
app.use("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});
// Middlewares
app.use(errHandlerMiddleware);

const PORT = process.env.PORT || 8001;
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

mongoose.connection.on("error", (error) => {
  console.log(error.message);
  logger(
    `${error.no}: ${error.code}\t${error.syscall}\t${error.hostname}\t`,
    "mongooseErrorLog.log"
  );
  console.log("Couldn't connect to database..");
});
