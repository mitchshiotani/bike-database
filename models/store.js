const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for store
const StoreSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The text field is required'],
  },
  location: {
    type: String,
    required: [true, 'The text field is required'],
  },
});

// Create model for store
const Store = mongoose.model('store', StoreSchema);

module.exports = Store;
