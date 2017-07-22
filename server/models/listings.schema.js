var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var listingsSchema = new Schema({
  cost: {type: Number},
  sqft: {type: Number},
  city: {type: String},

});

// export our model
module.exports = mongoose.model('Listing', listingsSchema);
