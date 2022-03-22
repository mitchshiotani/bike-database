const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for product
const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The text field is required'],
  },
  location: {
    type: String,
    required: [true, 'The text field is required'],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
});

// Create model for product
const product = mongoose.model('product', ProductSchema);

module.exports = product;

