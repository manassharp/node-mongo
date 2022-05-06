const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb://localhost:27017/';
db.user = require('./user.model')(mongoose);
db.book = require('./book.model')(mongoose);

module.exports = db;
