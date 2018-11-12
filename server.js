const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("./errorHandler");

const app = express();

//SETTINGS
app.set("port", process.env.PORT || 8080);


//MIDDLEWARES
app.use(bodyParser.json());


//ROUTINGS
const user = require("./routes/index");
app.use("/api/user", user);

//MIDDLEWARES FOR ERRORS
app.use((req, res, next) => {
  const error = new Error("Route Not Found In the Server!");
  error.status = 404;
  next(error);
});
app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Listening on port: ${app.get("port")}`);
});
