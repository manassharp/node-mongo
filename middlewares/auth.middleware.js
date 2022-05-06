const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config');

const isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401)
        .send({ message: 'AUTH error' });
      throw new Error('User not authorisation');
    }
    const decodeToken = jwt.verify(token, JWT_SECRET_KEY);
    req.jwtData = decodeToken;
    next();
  } catch (e) {
    res.status(401)
      .send({ message: 'User not authorisation' });
  }
};

module.exports = isAuth;
