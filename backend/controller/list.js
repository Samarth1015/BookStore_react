let { Book } = require("../model/bookSchema");
module.exports.booksdata = async (req, res, next) => {
  try {
    let books = await Book.find({});
    res.status(200).json(books);
  } catch (err) {
    res.status(500).send("err");
  }
};
