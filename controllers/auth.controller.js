const tokenService = require('../services/tokenService');
const db = require('../models');

const User = db.user;

const login = async (req, res) => {
  const {
    email,
    password,
  } = req.body;
  console.log('e', email, password);
  if (!email || !password) {
    res.status(400)
      .send({ message: 'Email and password are required' });
    return;
  }

  try {
    const user = await User.findOne({
      email,
      password,
    });

    if (user) {
      const accessToken = tokenService.generateAccessToken({
        ...{},
      });

      await User.updateOne({
        email,
        password,
      }, { $set: { accessToken } });

      res.status(200)
        .send({
          accessToken,
        });

      return;
    }
    res.status(400)
      .send({ message: 'User not found' });
  } catch (e) {
    console.log(e.message);
    res.status(401)
      .send({ message: e.message });
  }
};

const register = async (req, res) => {
  const {
    email,
    password,
  } = req.body;
  if (!email || !password) {
    res.status(400)
      .send({ message: 'Email and password are required' });
    return;
  }
  const user = new User({
    email,
    password,
  });
  try {
    const result = await user.save();
    res.status(200)
      .send(result);
  } catch (e) {
    res.status(500)
      .send({ message: 'Email is already exists' });
  }
};

module.exports = {
  login,
  register,
};
