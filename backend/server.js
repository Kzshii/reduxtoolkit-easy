const express = require('express');
const cors = require('cors');
const employees = require('./data/employees');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware

// Routes
// Want to get all employees here


app.get('/', (req, res) => {
  res.json({ 
    message: 'Employee API',
    endpoints: {
      '/api/employees': 'Get all employees',
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

