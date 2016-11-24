var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var nivelCapacidade = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('NivelCapacidade', nivelCapacidade);