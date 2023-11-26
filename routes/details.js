const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname, '../details.html'));
  });

module.exports = router;