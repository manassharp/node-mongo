const express = require('express');

const router = express.Router();
const bookController = require('../controllers/book.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/books', authMiddleware, bookController.list);

module.exports = router;
