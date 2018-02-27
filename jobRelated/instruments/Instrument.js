var mongoose = require('mongoose');  
var InstrumentSchema = new mongoose.Schema({  
  instrumentID: String,
  instrumentName: String,
  instrumentDescription: String
});
mongoose.model('Instrument', InstrumentSchema);

module.exports = mongoose.model('Instrument');