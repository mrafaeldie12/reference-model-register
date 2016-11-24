var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var categoriaSchema = new Schema({
  nome: String
});

mongoose.model('Categoria', categoriaSchema);