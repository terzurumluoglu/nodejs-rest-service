var express = require('express');
var router = express.Router();
const { postRoute } = require('./routes');

router.use('/posts', postRoute);

module.exports = router;
