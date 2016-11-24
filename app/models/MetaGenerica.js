var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var metaGenerica = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('MetaGenerica', metaGenerica);