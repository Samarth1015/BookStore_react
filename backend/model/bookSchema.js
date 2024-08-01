const mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

let Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
