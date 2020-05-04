const express = require("express");
// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./models");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const expressSession = require("express-session");

const userAPIRouter = require("./routes/user");
const productAPIRouter = require("./routes/product");
const passport = require("passport");
const passportConfig = require("./passport");
db.sequelize.sync();
dotenv.config();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/", express.static("uploads"));

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
passportConfig();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "react-youtube",
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/user", userAPIRouter);
app.use("/api/product", productAPIRouter);

app.post("/api/hello", (req, res) => {
  res.send("Hellllllo");
});

app.listen("5000", () => {
  console.log("express running on port 5000");
});
