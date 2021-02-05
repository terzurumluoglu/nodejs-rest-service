const { versions } = require('../constants/version');
const { successResponse } = require('../../helpers/response');

const getAllPosts = (req, res, next) => {
  const data = {};
  const result = successResponse(versions.v1, 200, 'Get All Posts', data);
  res.status(result.statusCode).json(result);
};

module.exports = { getAllPosts };
