const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/suggestions', (req, res) => {
    res.sendFile(path.join(__dirname, '../suggestions.html'));
  });

  router.get('/suggestions/com-confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, '../com-confirmation.html'));
  });

module.exports = router;