const { version } = require('../constants/version');
const PostSchema = require('../models/post.model');
const ErrorResponse = require('../utils/errorResponse');

const getAllPosts = () => {
  return PostSchema.find();
};

const getPostById = (postId) => {
  return PostSchema.find({ _id: postId });
};

const createPost = (data) => {
  return PostSchema.create(data);
};

const updatePost = async (postId, data, next) => {
  return PostSchema.findByIdAndUpdate(postId, data, {
    new: true,
    runValidators: true,
  });
};

module.exports = { getAllPosts, getPostById, createPost, updatePost };
