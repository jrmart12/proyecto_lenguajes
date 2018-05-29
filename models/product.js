var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    isbn: String,
    name: String,
    category: String,
    description: String,
    expiration_date: String,
    price: Number,
    updated_date: { type: Date, default: Date.now },
  });
module.exports = mongoose.model('Product', ProductSchema);