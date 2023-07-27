const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/livecharts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});