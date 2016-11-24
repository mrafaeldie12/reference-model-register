var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var metaGenericaSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('MetaGenerica', metaGenericaSchema);