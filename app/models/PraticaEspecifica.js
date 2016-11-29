var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var praticaEspecificaSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String,
  _produtoTrabalho: {type : Schema.ObjectId, ref : 'ProdutoTrabalho'}
});

mongoose.model('PraticaEspecifica', praticaEspecificaSchema);