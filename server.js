const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Body parser for form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../views/index.html')));
app.get('/products', (req, res) => res.sendFile(path.join(__dirname, '../views/products.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, '../views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '../views/login.html')));
app.get('/admin-orders', (req, res) => res.sendFile(path.join(__dirname, '../views/admin-orders.html')));

// Sample form submission handlers (for now — they just redirect)
app.post('/register-user', (req, res) => {
  console.log(req.body);
  res.redirect('/login');
});

app.post('/login-user', (req, res) => {
  console.log(req.body);
  res.redirect('/products');
});

// Server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
