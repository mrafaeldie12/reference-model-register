var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var modelo = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('Modelo', modelo);