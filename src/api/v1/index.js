var express = require('express');
var router = express.Router();
const { postRoute, tagRoute } = require('./routes');

router.use('/posts', postRoute);
router.use('/tags', tagRoute);

module.exports = router;
