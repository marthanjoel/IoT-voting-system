// imports
const { format } = require("date-fns"); // formating of date and time
const { v4: uuid } = require("uuid"); // uuid v4 for unique id
const path = require("path"); // path
const fs = require("fs"); // file system access

const logger = async (message, logFile) => {
  const datetime = format(new Date(), "yyMMdd\tHH:mm:ss");
  const logItem = `${datetime}\t${uuid()}\t${message}\n`;
  const logPath = path.join(__dirname, "logs");

  try {
    if (!fs.existsSync(logPath)) {
      // check and create new log path if it doesn't exist
      await fs.promises.mkdir(logPath);
    }
    await fs.promises.appendFile(path.join(logPath, logFile), logItem);
  } catch (error) {
    console.log(error);
  }
};
const loggerMiddleware = (req, res, next) => {
  logger(`${req.method}\t${req.url}\t${req.headers.origin}`, "requestLogs.log");
  next();
};

module.exports = { loggerMiddleware, logger };
