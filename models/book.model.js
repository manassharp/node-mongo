module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      description: String,
      author: String,
      path: String,
    },
    { timestamps: true },
  );

  const Book = mongoose.model('book', schema);
  return Book;
};
