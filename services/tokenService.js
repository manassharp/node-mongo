const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config');

const generateAccessToken = (payload) => jwt.sign(payload, JWT_SECRET_KEY, {
  expiresIn: '30d',
});

module.exports = {
  generateAccessToken,
};
