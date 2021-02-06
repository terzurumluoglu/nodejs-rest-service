const { tagService } = require('../services');
const { successResponse } = require('../utils/successResponse');
const { version } = require('../constants/version');
const { asyncHandler } = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');

const createTag = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  const tag = await tagService.createTag(req.body);
  if (!tag) {
    return next(new ErrorResponse(version.v1, 'Hata', 500));
  }

  const result = successResponse(version.v1, 200, 'Create a new Tag', tag);
  res.status(result.statusCode).json(result);
});

module.exports = { createTag };
