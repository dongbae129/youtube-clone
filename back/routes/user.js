const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const db = require("../models");
router.post("/", async (req, res) => {
  try {
    const usering = await db.User.findOne({
      where: { userId: req.body.userId },
    });
    if (usering) {
      return res.status(400).send("이미 사용중인 아이디 입니다");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword,
    });

    return res.status(200).json(user);
  } catch (e) {
    console.error(e);
  }
});
router.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body, "@@@@@@");
    const useringId = await db.User.findOne({
      where: { userId: req.body.userId },
    });
    if (useringId) {
      return res.status(400).send("이미 사용중인 아이디 입니다");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await db.User.create({
      userId: req.body.userId,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    const sendUser = await db.User.findOne({
      where: { userId: req.body.userId },
      attributes: ["nickname", "userId"],
    });
    return res.status(200).json(sendUser);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
router.post("/login", (req, res) => {
  res.send("QQQQQQQQQQQQQQQQQ");
});

module.exports = router;
