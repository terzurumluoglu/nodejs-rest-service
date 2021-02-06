const TagSchema = require('../models/tag.model');
const { asyncHandler } = require('../middlewares/async');

/**
 * @desc    Send a new Tag
 *
 * @param   {string} name
 * @returns {object} tag
 */
const createTag = asyncHandler(async (name) => {
  const tag = await TagSchema.create(name);
  console.log(tag);
  return tag;
});

module.exports = { createTag };
