const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, '../contact-us.html'));
  });

module.exports = router;