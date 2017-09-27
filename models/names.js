var mongoose = require('mongoose');

var NamesSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Names", NamesSchema);