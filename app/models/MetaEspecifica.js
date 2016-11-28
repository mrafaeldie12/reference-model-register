var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var metaEspecificaSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String,
  _praticaEspecifica : [
    { type : Schema.ObjectId, ref : 'PraticaEspecifica' }
  ]
});

mongoose.model('MetaEspecifica', metaEspecificaSchema);