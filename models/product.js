var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  }
},
{
    collection: 'products'
});

module.exports = mongoose.model('Product', Product);