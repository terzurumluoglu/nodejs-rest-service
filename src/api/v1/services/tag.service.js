const TagSchema = require('../models/tag.model');
const { asyncHandler } = require('../middlewares/async');

/**
 * @desc    Send All Tag
 *
 * @returns {Array} tags
 */
const getAllTags = () => {
  return TagSchema.find();
};

/**
 * @desc    Send a new Tag
 *
 * @param   {string} name
 * @returns {object} tag
 */
const createTag = (name) => {
  return TagSchema.create(name);
};

module.exports = { getAllTags, createTag };
