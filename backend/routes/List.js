const express = require("express");
const router = express.Router();
let { Book } = require("../model/bookSchema");
let list = require("../controller/list");

router.get("/", list.booksdata);

module.exports = router;
