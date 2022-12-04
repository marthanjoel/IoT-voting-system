const { logger } = require("./logger");

const errHandlerMiddleware = (err, req, res, next) => {
  logger(
    `${err.name}\t${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}\n`,
    "errLogs.log"
  );
  console.log(err.stack);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode).json({ message: err.message });
};

module.exports = { errHandlerMiddleware };
