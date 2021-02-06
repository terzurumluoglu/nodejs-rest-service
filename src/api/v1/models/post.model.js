const mongoose = require('mongoose');
const { collection } = require('../constants/collections');

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Add a Title'],
    trim: true,
    maxLength: [50, 'Title can not be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: false,
    maxLength: [250, 'Description can not be more than 250 characters'],
  },
  body: {
    type: String,
    required: [true, 'Please Add a content'],
  },
  isActive: {
    type: Boolean,
  },
  isDeleted: {
    type: Boolean,
  },
  tags: [
    {
      type: mongoose.Schema.ObjectId,
      ref: collection.tag.name,
      required: false,
    },
  ],
});

PostSchema.pre('save', function (next) {
  this.isActive = this.isActive ? this.isActive : false;
  this.isDeleted = this.isDeleted ? this.isDeleted : false;
  next();
});

module.exports = mongoose.model(collection.post.name, PostSchema);
