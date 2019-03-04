var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Restaurant = require('../models/restaurant');

/* GET home page. */
router.get('/restaurants', async function (req, res, next) {
console.log('je suis dans restaurant')
  Restaurant.find({}, (err, result) => {
    if (err != undefined)
      res.status(400).send(err)
    else
      res.send(result)
      console.log(result)
  })
});


// insert object to collection
/*var testResto = {
    name: 'test',
    adress: 'rue du test',
    city: 'test city',
    postalCode: 59000,
    description: 'test',
    classement: 6
                };

router.post('/restaurants', async function (req, res, next) {
    Restaurant.create( testResto )
});*/




module.exports = router;
