var express = require('express');
const router = express.Router({ mergeParams: true });
const { tagController } = require('../controllers');

router.route('/').get(tagController.getAllTags);

router.route('/').post(tagController.createTag);

module.exports = router;
