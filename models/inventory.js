const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for inventory
const InventorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'The text field is required'],
  },
  location: {
    type: String,
    required: [true, 'The text field is required'],
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: 'store'
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'product'
  },
});

// Create model for inventory
const inventory = mongoose.model('inventory', InventorySchema);

module.exports = inventory;


