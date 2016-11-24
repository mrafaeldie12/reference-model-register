var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var modelo = new Schema({
  sigla: String,
  nome: String,
  descricao: String,
  areasDeProcesso : [
	{ type : Schema.ObjectId, ref : 'AreaDeProcesso' }
  ]
});

mongoose.model('Modelo', modelo);