var express = require('express');
const router = express.Router({ mergeParams: true });
const { postController } = require('../controllers');

router
  .route('/')
  .get(postController.getAllPosts)
  .post(postController.createPost);

router
  .route('/:postId')
  .get(postController.getPostById)
  .put(postController.updatePost);

module.exports = router;
