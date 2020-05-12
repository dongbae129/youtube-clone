const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await db.Product.findAll({
      include: [
        {
          model: db.User,
        },
        {
          model: db.Image,
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
