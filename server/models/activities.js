var mongoose = require('mongoose');
var ActivityModelSchema = mongoose.Schema;

// Server schema type
var ActivityModelSchema = new mongoose.Schema(
    {
        name: String,
        adress: String,
        city: String,
        postalCode: Number,
        description: String,
        classement: Number,
        photo: String,
    }
  );

  // Export model
  module.exports = mongoose.model('Activities', ActivityModelSchema );
