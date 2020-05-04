const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const path = require("path");
const multer = require("multer");
// var passport = require("passport"),
//   LocalStrategy = require("passport-local").Strategy;

const router = express.Router();
const db = require("../models");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    cb(null, basename + new Date().valueOf() + ext);
  },
});

const upload = multer({ storage: storage });

router.post("/image", upload.single("file"), (req, res) => {
  res.status(200).json(req.file.filename);
});

module.exports = router;
