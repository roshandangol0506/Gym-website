const express = require("express");
const path = require("path");
const { restrictToLoggedinUserOnly } = require("../middleware/auth");
const { handleimage } = require("../controllers/image");
const URL = require("../modules/url");

const router = express.Router();

// Route to render the main.ejs page with images
router.get("/", handleimage);

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/joingym", (req, res) => {
  return res.render("home");
});

router.get("/uploadimages", restrictToLoggedinUserOnly, (req, res) => {
  res.render("uploadImage");
});

module.exports = router;
