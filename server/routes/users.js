var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user')

/* GET users page. */
router.get('/users', async function (req, res, next) {

  User.find({}, (err, result) => {
    if (err != undefined)
      res.status(400).send(err)
    else
      res.send(result)
      console.log(result)
  })
});

module.exports = router;
