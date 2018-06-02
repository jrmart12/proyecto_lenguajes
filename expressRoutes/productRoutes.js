var express = require('express');
var app = express();
var productRoutes = express.Router();

// Require Item model in our routes module
var Product = require('../models/Product');

// Defined store route
productRoutes.route('/add').post(function (req, res) {
  var product = new Product(req.body);
   product.save()
    .then(item => {
    res.status(200).json({'product': 'Product added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
productRoutes.route('/').get(function (req, res) {
   Product.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

// Defined edit route
productRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Product.findById(id, function (err, product){
      res.json(product);
  });
});

//  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
   Product.findById(req.params.id, function(err, product) {
    if (!product)
      return next(new Error('Could not load Document'));
    else {
      product.name = req.body.name;
      product.price = req.body.price;

      product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req, res) {
   Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;