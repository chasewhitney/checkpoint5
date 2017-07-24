var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var messagesSchema = new Schema({
  name: {type: String},
  message: {type: String},

});

// export our model
module.exports = mongoose.model('Message', messagesSchema);
