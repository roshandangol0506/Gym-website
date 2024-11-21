const express = require("express");
const {
  uploadProfileImage,
  handleUploadProfileImage,
  handleUploadImage,
} = require("../controllers/uploadProfileImage");
const router = express.Router();

router.post(
  "/uploadProfileImage",
  uploadProfileImage.single("profilepic"),
  handleUploadProfileImage
);

router.post(
  "/uploadimages",
  uploadProfileImage.single("gymimages"),
  handleUploadImage
);

module.exports = router;
