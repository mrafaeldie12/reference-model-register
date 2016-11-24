var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var produtoTrabalho = new Schema({
  nome: String,
  template: String
});

mongoose.model('ProdutoTrabalho', produtoTrabalho);