var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var areaProcesso = new Schema({
  sigla: String,
  nome: String,
  descricao: String
});

mongoose.model('AreaProcesso', areaProcesso);