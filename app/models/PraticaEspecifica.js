var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var praticaEspecificaSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('PraticaEspecifica', praticaEspecificaSchema);