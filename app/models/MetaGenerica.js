var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var metaGenericaSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String,
  _nivelCapacidade : { type : Schema.ObjectId, ref : 'NivelCapacidade' }
});

mongoose.model('MetaGenerica', metaGenericaSchema);