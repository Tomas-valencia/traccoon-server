var mongoose = require('mongoose');
var userModelSchema = mongoose.Schema;

// Server schema type
var userModelSchema = new mongoose.Schema(
    {
        nom: String,
        prenom: String,
        city: String,
        email:  String,
        photo: String
    }
  );

  // Export model
  module.exports = mongoose.model('User', userModelSchema );