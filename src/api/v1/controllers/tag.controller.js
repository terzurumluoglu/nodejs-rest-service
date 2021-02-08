const { tagService } = require('../services');
const { asyncHandler } = require('../middlewares/async');

const getAllTags = asyncHandler(async (req, res, next) => {
  const tags = await tagService.getAllTags();

  res.status(200).json({
    success: true,
    method: req.method,
    message: 'Get All Tags',
    statusCode: 200,
    result: tags,
  });
});

const createTag = asyncHandler(async (req, res, next) => {
  const tag = await tagService.createTag(req.body);

  res.status(200).json({
    success: true,
    method: req.method,
    message: 'Create a new Tag',
    statusCode: 200,
    result: tag,
  });
});

module.exports = { getAllTags, createTag };
