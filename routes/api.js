const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');

router.get('/categories', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Category.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/categories', (req, res, next) => {
  if (req.body.name) {
    Category.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.get('/test', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  return "Hello world";
});


// router.get('/products', (req, res, next) => {
//   // This will return all the data, exposing only the id and action field to the client
//   Product.find({}, ['name', 'location'])
//     .then((data) => res.json(data))
//     .catch(next);
// });

// router.post('/products', (req, res, next) => {
//   if (req.body.name &&
//     req.body.category &&
//     req.body.location
//   ) {
//     Product.create(req.body)
//       .then((data) => res.json(data))
//       .catch(next);
//   } else {
//     res.json({
//       error: 'The input field is empty',
//     });
//   }
// });

// router.delete('/todos/:id', (req, res, next) => {
//   Todo.findOneAndDelete({ _id: req.params.id })
//     .then((data) => res.json(data))
//     .catch(next);
// });

module.exports = router;
