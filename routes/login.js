const jwt = require("../jwt");

const config = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  if (email === "test@test.com" && password === "pass123") next();
  else next({ msg: "Wrong email or password!" });
};

const processing = async (req, res, next) => {
  try {
    let randomNum = Math.floor(Math.random() * 1000);
    let token = jwt.generateJwt(randomNum);
    res.status(200).send({ token });
  } catch (ex) {
    const error = new Error(`Error in /api/user/root ${ex}`);
    error.status = 500;
    next(error);
  }
};

module.exports = {
  config,
  processing
};
