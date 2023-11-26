const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can choose any port you prefer

// Middleware to serve static files (like your HTML, CSS, and JS files)
app.use(express.static(__dirname));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index-ar', (req, res) => {
    res.sendFile(path.join(__dirname, 'index-ar.html'));
});

app.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname, 'details.html'));
});

app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, 'table.html'));
});

app.get('/advanced-table', (req, res) => {
    res.sendFile(path.join(__dirname, 'advanced-table.html'));
});

app.get('/suggestions', (req, res) => {
    res.sendFile(path.join(__dirname, 'suggestions.html'));
});

app.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-us.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
