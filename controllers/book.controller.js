const db = require('../models');

const Book = db.book;

const list = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200)
      .send({
        books,
      });
  } catch (e) {
    res.status(500)
      .send({ message: e.message });
  }
};

module.exports = {
  list,
};
