var express = require('express');
var router = express.Router();

// GET /api/v1/users
router.get('/', async (req, res) => {
  res.json([]);
});

module.exports = router;
