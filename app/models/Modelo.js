var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var modeloSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String,
  _areasDeProcesso : [
	{ type : Schema.ObjectId, ref : 'AreaDeProcesso' }
  ]
});

mongoose.model('Modelo', modeloSchema);