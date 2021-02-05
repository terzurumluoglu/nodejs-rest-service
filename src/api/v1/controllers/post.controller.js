const { version } = require('../constants/version');
const { successResponse } = require('../utils/successResponse');
const { postService } = require('../services');
const ErrorResponse = require('../utils/errorResponse');

const getAllPosts = (req, res, next) => {
  const posts = postService.getAllPosts();
  const result = successResponse(versions.v1, 200, 'Get All Posts', posts);
  res.status(result.statusCode).json(result);
};

const getPostById = (req, res, next) => {
  const postId = +req.params.postId;
  const post = postService.getPostById(postId);

  if (!post) {
    return next(
      new ErrorResponse(version.v1, `Post not found id of ${postId}`, 404)
    );
  }

  const result = successResponse(version.v1, 200, 'Get Single Post', post);
  res.status(result.statusCode).json(result);
};

module.exports = { getAllPosts, getPostById };
