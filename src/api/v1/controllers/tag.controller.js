const { tagService } = require('../services');
const { successResponse } = require('../utils/successResponse');
const { version } = require('../constants/version');
const { asyncHandler } = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');

const createTag = asyncHandler(async (req, res, next) => {
  const tag = await tagService.createTag(req.body);
  const result = successResponse(version.v1, 200, 'Create a new Tag', tag);
  res.status(result.statusCode).json(result);
});

module.exports = { createTag };
