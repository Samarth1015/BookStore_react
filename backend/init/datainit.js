require("dotenv").config();
let { Book } = require("../model/bookSchema");
const mongoose = require("mongoose");
let mongoUrl = "mongodb://127.0.0.1:27017/bookstore";
let connectDb = async () => {
  try {
    await mongoose.connect(mongoUrl).then(() => console.log("Connected!"));
  } catch (err) {
    console.log(err);
  }
};
connectDb();

let list = require("./data.json");

let save = async () => {
  await Book.insertMany(list);
};
save();
