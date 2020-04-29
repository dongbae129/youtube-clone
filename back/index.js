const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./models");
const app = express();
const morgan = require("morgan");
const userAPIRouter = require("./routes/user");
db.sequelize.sync();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use("/api/user", userAPIRouter);

app.post("/api/hello", (req, res) => {
  res.send("Hellllllo");
});

app.listen("5000", () => {
  console.log("express running on port 5000");
});
