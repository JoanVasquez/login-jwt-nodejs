const jwt = require("../jwt");

module.exports = (req, res, next) => {
  try {
    jwt.validateJwt(req, res, next);
    if (!res.headersSent) {
        res.status(200).send({msg: "user aunthenticated with token..."});
    }
  } catch (ex) {
    const error = new Error(`Error in /api/user/list ${ex}`);
    error.status = 500;
    next(error);
  }
};
