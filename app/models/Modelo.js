var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var modeloSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String,
  _areaProcesso : [
	{ type : Schema.ObjectId, ref : 'AreaProcesso' }
  ]
});

mongoose.model('Modelo', modeloSchema);