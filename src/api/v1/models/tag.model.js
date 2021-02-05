const mongoose = require('mongoose');
const { collection } = require('../constants/collections');

const TagSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model(collection.tag.name, TagSchema);
