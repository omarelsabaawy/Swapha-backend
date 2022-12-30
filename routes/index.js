var express = require('express');
var router = express.Router();
const Product = require('../Model/Product');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'My graduation Project API' });
});

router.get('/api/homeProducts', (req, res) => {
  Product
    .find({ swap: true })
    .then(products => {
      res.send(products)
    })
    .catch(err => { console.log(err); });
});

router.get('/api/products', (req, res) => {
  Product
    .find()
    .then(proucts => {
      res.send(proucts);
    })
    .catch(err => { console.log(err); });
});

router.get('/api/products/slug/:slug', (req, res) => {
  const slug = req.params.slug;

  Product
    .find({ slug: slug })
    .then(product => {
      res.send(product);
    })
    .catch(err => { console.log(err); });

});

router.get('/api/products/swap', (req, res) => {
  Product
    .find({ swap: true })
    .then(products => {
      res.send(products);
    })
    .catch(err => { console.log(err); });
});

router.get('/api/products/buy', (req, res) => {
  Product
    .find({ buy: true })
    .then(products => {
      res.send(products);
    })
    .catch(err => { console.log(err); });
});

module.exports = router;