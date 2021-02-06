const mongoose = require('mongoose');
const TagSchema = require('./tag.model');
const { collection } = require('../constants/collections');

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please Add a Title'],
    trim: true,
    maxLength: [50, 'Title can not be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    require: false,
    maxLength: [250, 'Description can not be more than 250 characters'],
  },
  body: {
    type: String,
    require: [true, 'Please Add a content'],
  },
  tags: [
    {
      type: mongoose.Schema.ObjectId,
      ref: collection.tag.name,
      required: false,
    },
  ],
});

module.exports = mongoose.model(collection.post.name, PostSchema);
