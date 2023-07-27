
const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API routes
app.use('/api', require('./server/routes/api'));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});