var mongoose = require('mongoose'),
  categoriaModel = require('./Categoria.js'),
  nivelMaturidadeModel = require('./NivelMaturidade.js'),
  categoriaSchema = mongoose.model('Categoria').schema,
  nivelMaturidadeSchema = mongoose.model('NivelMaturidade').schema,
  Schema = mongoose.Schema;

var areaProcessoSchema = new Schema({
  sigla: String,
  nome: String,
  descricao: String,
  _categoria: {type : Schema.ObjectId, ref : 'Categoria'},
  _nivelMaturidade: {type : Schema.ObjectId, ref : 'NivelMaturidade'}
});

mongoose.model('AreaProcesso', areaProcessoSchema);