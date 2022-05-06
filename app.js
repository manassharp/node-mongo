#!/usr/bin/env node
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes');
const db = require('./models');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);
app.use(express.json());

app.use('/api', router.authRoutes);
app.use('/api', router.bookRoutes);

app.listen(3000, () => console.log('Servers has been started on 5000 port'));
