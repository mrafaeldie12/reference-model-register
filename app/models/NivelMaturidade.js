var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var nivelMaturidadeSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('NivelMaturidade', nivelMaturidadeSchema);