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
  let post = await PostSchema.findById(postId);
  if (post) {
    post = await PostSchema.findByIdAndUpdate(postId, data, {
      new: true,
      runValidators: true,
    });
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost };
