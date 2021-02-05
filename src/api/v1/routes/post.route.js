var express = require('express');
const router = express.Router({ mergeParams: true });
const { postController } = require('../controllers');

router.route('/').get(postController.getAllPosts);
router.route('/:postId').get(postController.getPostById);

module.exports = router;
