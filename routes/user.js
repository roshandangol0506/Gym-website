const express = require("express");
const { handleUserLogin, handleUserSignup } = require("../controllers/user");

const router = express.Router();

router.post("/login", handleUserLogin);
router.post("/", handleUserSignup);

module.exports = router;
