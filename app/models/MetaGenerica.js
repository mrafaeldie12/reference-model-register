var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var metaGenericaSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String,
  _metaEspecifica : [
	{ type : Schema.ObjectId, ref : 'MetaEspecifica' }
  ]
});

mongoose.model('MetaGenerica', metaGenericaSchema);