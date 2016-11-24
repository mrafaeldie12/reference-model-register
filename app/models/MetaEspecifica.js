var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var metaEspecificaSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('MetaEspecifica', metaEspecificaSchema);