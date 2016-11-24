var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var metaEspecifica = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('MetaEspecifica', metaEspecifica);