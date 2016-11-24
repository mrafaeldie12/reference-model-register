var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var praticaEspecifica = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('PraticaEspecifica', praticaEspecifica);