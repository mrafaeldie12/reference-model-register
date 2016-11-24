var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var nivelMaturidade = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('NivelMaturidade', nivelMaturidade);