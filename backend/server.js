require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
let { Book } = require("./model/bookSchema");
let { User } = require("./model/userSchema");
const cors = require("cors");
let users = require("./routes/user");
app.use((req, res, next) => {
  console.log(req.path);
  next();
});
app.use(cors());
let mongoUrl = process.env.MONGOOSE_URL;
let connectDb = () => {
  try {
    mongoose.connect(mongoUrl).then(() => console.log("Connected!"));
  } catch (err) {
    console.log(err);
  }
};
connectDb();
let books = require("./routes/List");

app.use(express.json());
app.use(express.urlencoded());

let port = process.env.PORT || 8080;

app.use("/api/book", books);
app.use("/api/user", users);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
