const identify = (req, res, next) => {
  if (req.headers.secret == "7d0664823505ac3b4afbdd0e5035dc61") {
    console.log("test");
    next();
  } else {
    res.status(405).send("Access token not found.");
  }
};

module.exports = { identify };
