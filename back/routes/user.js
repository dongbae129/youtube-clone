const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
// var passport = require("passport"),
//   LocalStrategy = require("passport-local").Strategy;

const router = express.Router();
const db = require("../models");

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "userId",
//       passwordField: "password",
//     },
//     async (userId, password, done) => {
//       try {
//         const user = await db.User.findOne({
//           where: { userId },
//         });

//         if (!user) {
//           return done(null, false, { reason: "존재하지 않는 사용자입니다" });
//         }
//         const result = await bcrypt.compare(password, user.password);
//         if (result) {
//           return done(null, user);
//         }
//         return done(null, false, { reason: "비밀번호가 틀립니다" });
//       } catch (e) {
//         return done(e);
//       }
//     }
//   )
// );
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (info) {
      return res.status(401).send(info.reason);
    }

    return req.login(user, async (loginErr) => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        const finalUser = await db.User.findOne({
          where: { id: user.id },
        });
        return res.json(finalUser);
      } catch (e) {
        console.error(e);
        next(e);
      }
    });
  })(req, res, next);
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

    return res.status(200).json(user);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
