var express = require('express');
var router = express.Router();

router.route('/').get(function (req, res, next) {
  res.status(200).json({
    success: true,
    version: 'v2',
    method: req.method,
  });
});

router.route('/').post(function (req, res, next) {
  res.status(200).json({
    success: true,
    version: 'v2',
    method: req.method,
  });
});

module.exports = router;
