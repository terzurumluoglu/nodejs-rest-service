const mongoose = require('mongoose');
const { collection } = require('../constants/collections');

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Add Tag Name'],
  },
});

module.exports = mongoose.model(collection.tag.name, TagSchema);
