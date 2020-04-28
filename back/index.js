const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/api/hello", (req, res) => {
  res.send("Hellllllo");
});

app.listen("5000", () => {
  console.log("express running on port 5000");
});
