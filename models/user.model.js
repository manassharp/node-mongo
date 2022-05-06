module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      email: {
        type: String,
        unique: true,
      },
      password: String,
      token: String,
    },
    { timestamps: true },
  );

  const User = mongoose.model('user', schema);
  return User;
};
