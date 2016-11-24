var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var nivelCapacidadeSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('NivelCapacidade', nivelCapacidadeSchema);