const express = require("express");
const router = express.Router();
let { User } = require("../model/userSchema");
let user = require("../controller/user");

router.post("/signup", user.signup);
router.post("/login", user.login);

module.exports = router;
