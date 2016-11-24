var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var produtoTrabalhoSchema = new Schema({
  nome: String,
  template: String
});

mongoose.model('ProdutoTrabalho', produtoTrabalhoSchema);