
  var mongoose = require('mongoose');
  var restaurantModelSchema = mongoose.Schema;
  
  // Server schema type
  var restaurantModelSchema = new mongoose.Schema(
      {
          name: String,
          adress: String,
          city: String,
          postalCode: Number,
          description: String,
          classement: Number,
          photo: String
      }
    );
  
    // Export model
    module.exports = mongoose.model('Restaurant', restaurantModelSchema );
  