const express = require('express');
const app = express();
const port = 3000; // You can choose any port you prefer

// Middleware to serve static files (like your HTML, CSS, and JS files)
app.use(express.static(__dirname));

const indexRouter = require('./routes/index');
const indexArRouter = require('./routes/index-ar');
const tableRouter = require('./routes/table');
const advanced_tableRouter = require('./routes/advanced-table');
const detailsRouter = require('./routes/details');
const suggestionsRouter = require('./routes/suggestions');
const contactUsRouter = require('./routes/contact-us');





// Use route handlers
app.use(indexRouter);
app.use(indexArRouter);
app.use(tableRouter);
app.use(advanced_tableRouter);
app.use(detailsRouter);
app.use(suggestionsRouter);
app.use(contactUsRouter);

app.post('/com-confirmation.html', (req, res) => {
    // Access form data from the request body
    const formData = req.body;
  
    // Process the form data (for now, just log it)
    console.log('Form Data:', formData);
  
    // Send a confirmation response to the user
    res.send('Form submission processed successfully!');
  });


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
