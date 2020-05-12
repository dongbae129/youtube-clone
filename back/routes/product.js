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

router.post("/", async (req, res) => {
  try {
    if (!req.user) {
      return res.status(402).send("로그인이 필요합니다");
    }

    const newProduct = await db.Product.create({
      title: req.body.name,
      description: req.body.description,
      price: req.body.price,
      continent: req.body.continent,
      UserId: req.user.id,
    });
    console.log(newProduct.addImage, "()()()");
    if (req.body.image) {
      if (req.body.image.length > 1) {
        const images = await Promise.all(
          req.body.image.map((v) => db.Image.create({ src: v }))
        );
        await newProduct.addImages(images);
      } else {
        const image = await db.Image.create({
          src: req.body.image[0],
        });
        await newProduct.addImage(image);
      }
    }
    const sendProduct = await db.Product.findOne({
      where: { id: newProduct.id },
      include: [
        {
          model: db.Image,
        },
      ],
    });

    return res.json(sendProduct);
  } catch (e) {
    console.error(e);
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const product = await db.Product.findOne({
      where: { id: parseInt(req.params.productId, 10) },
      include: [
        {
          model: db.User,
        },
        {
          model: db.Image,
        },
      ],
    });
    res.json(product);
  } catch (e) {
    console.error(e);
  }
});

router.post("/image", upload.single("file"), (req, res) => {
  res.status(200).json(req.file.filename);
});

router.post("/cart", async (req, res) => {
  // console.log(req.user.userId, req.user.password, "##");
  try {
    const cart = await db.Cart.findOne({
      where: { UserId: req.user.id, title: req.body.title },
      include: [
        {
          model: db.User,
        },
      ],
    });

    // await cart.User.addImage(newimg);
    if (cart) {
      await cart.update({
        number: parseInt(cart.toJSON().number, 10) + 1,
      });
      return res.json(cart);
    }

    const newCart = await db.Cart.create({
      title: req.body.title,
      price: req.body.price,
      number: req.body.num,
      image: req.body.img.src,
      UserId: req.user.id,
    });
    // newCart.addImage(req.body.img);

    const finalCart = await db.Cart.findOne({
      where: { UserId: req.user.id, title: req.body.title },
      include: [
        {
          model: db.User,
        },
      ],
    });

    res.json(finalCart);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
