const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/advanced-table', (req, res) => {
    res.sendFile(path.join(__dirname, '../advanced-table.html'));
  });

module.exports = router;