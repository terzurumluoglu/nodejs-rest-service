const { version } = require('../constants/version');
const { successResponse } = require('../utils/successResponse');
const { postService } = require('../services');
const ErrorResponse = require('../utils/errorResponse');
const { asyncHandler } = require('../middlewares/async');

const getAllPosts = asyncHandler(async (req, res, next) => {
  const posts = await postService.getAllPosts();
  const result = successResponse(version.v1, 200, 'Get All Posts', posts);
  res.status(result.statusCode).json(result);
});

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

const createPost = asyncHandler(async (req, res, next) => {
  const post = await postService.createPost(req.body);
  const result = successResponse(version.v1, 200, 'Create a new Post', post);
  res.status(result.statusCode).json(result);
});

const updatePost = asyncHandler(async (req, res, next) => {
  const post = await postService.updatePost(req.params.postId, req.body, next);
  if (!post) {
    return next(new ErrorResponse(version.v1, `Not Found`, 404));
  }
  const result = successResponse(version.v1, 200, 'Updated Post', post);
  res.status(result.statusCode).json(result);
});

module.exports = { getAllPosts, getPostById, createPost, updatePost };
