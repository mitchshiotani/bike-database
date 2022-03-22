const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for category
const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'The text field is required'],
  },
});

// Create model for category
const category = mongoose.model('category', CategorySchema);

module.exports = category;


