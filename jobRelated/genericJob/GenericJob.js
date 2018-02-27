
var mongoose = require('mongoose');  
var genericSchema = new mongoose.Schema({},{strict:false});
mongoose.model('GenericJob', genericSchema);

module.exports = mongoose.model('GenericJob');