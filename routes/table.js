const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, '../table.html'));
  });

module.exports = router;