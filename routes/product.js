var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var product = require('../models/product.js');

/* GET ALL productS */
router.get('/', function(req, res, next) {
  product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE product BY ID */
router.get('/:id', function(req, res, next) {
  product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE product */
router.post('/', function(req, res, next) {
  product.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE product */
router.put('/:id', function(req, res, next) {
  product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE product */
router.delete('/:id', function(req, res, next) {
  product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;