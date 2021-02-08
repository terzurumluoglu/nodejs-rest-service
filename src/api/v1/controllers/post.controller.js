const { postService } = require('../services');
const ErrorResponse = require('../utils/errorResponse');
const { asyncHandler } = require('../middlewares/async');

const getAllPosts = asyncHandler(async (req, res, next) => {
  const posts = await postService.getAllPosts();
  res.status(200).json({
    success: true,
    method: req.method,
    // url: `${req.headers.host + req.baseUrl}`,
    message: 'Get All Posts',
    statusCode: 200,
    count: posts.length,
    result: posts,
  });
});

const getPostById = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;

  const post = await postService.getPostById(postId);

  if (!post) {
    return next(new ErrorResponse(`Post not found id of ${postId}`, 404));
  }

  res.status(200).json({
    success: true,
    method: req.method,
    message: 'Get Single Post',
    statusCode: 200,
    result: post,
  });
});

const createPost = asyncHandler(async (req, res, next) => {
  const post = await postService.createPost(req.body);

  res.status(200).json({
    success: true,
    method: req.method,
    message: 'Create a new Post',
    statusCode: 200,
    result: post,
  });
});

const updatePost = asyncHandler(async (req, res, next) => {
  const post = await postService.updatePost(req.params.postId, req.body, next);

  if (!post) {
    return next(new ErrorResponse(`Not Found`, 404));
  }

  res.status(200).json({
    success: true,
    method: req.method,
    message: 'Updated Post',
    statusCode: 200,
    result: post,
  });
});

module.exports = { getAllPosts, getPostById, createPost, updatePost };
