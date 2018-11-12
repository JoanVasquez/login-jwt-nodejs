const jwt = require("jsonwebtoken");

const validateJwt = (req, res, next) => {
  let token = req.headers["x-access-token"];
  let error = new Error();
  error.status = 500;
  if (!token && !res.headerSent) {
    error.message = "Not token provided!";
    next(error);
  } else if (token && !res.headerSent) {
    jwt.verify(token, "superSecretPass", err => {
      if (err) {
        error.message = `Failed to authenticate token ${err}`;
        next(error);
      }
    });
  }
};

const generateJwt = userId => {
  return jwt.sign({ userId }, "superSecretPass" /*, { expiresIn: 86400 }*/);
};

module.exports = {
  validateJwt,
  generateJwt
};
