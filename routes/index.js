const authRoutes = require('./auth.router');
const bookRoutes = require('./book.router');

const router = {
  authRoutes,
  bookRoutes,
};

module.exports = router;
