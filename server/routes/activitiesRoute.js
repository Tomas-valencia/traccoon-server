var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Activity = require('../models/activities');

/* GET home page. */
router.get('/activities', async function (req, res, next) {

  console.log('je suis dans activities')
  Activity.find({}, (err, result) => {
    if (err != undefined)
      res.status(400).send(err)
    else
      res.send(result)
      console.log(result)
  })
});




module.exports = router;
