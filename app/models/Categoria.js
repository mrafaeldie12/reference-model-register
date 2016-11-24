var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var categoria = new Schema({
  nome: String
});

mongoose.model('Categoria', categoria);