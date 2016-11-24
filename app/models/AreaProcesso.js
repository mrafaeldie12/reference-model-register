var mongoose = require('mongoose'),
  categoriaModel = require('./Categoria.js'),
  nivelMaturidadeModel = require('./NivelMaturidade.js'),
  categoriaSchema = mongoose.model('Categoria').schema,
  nivelMaturidadeSchema = mongoose.model('NivelMaturidade').schema,
  Schema = mongoose.Schema;

var areaProcesso = new Schema({
  sigla: String,
  nome: String,
  descricao: String,
  categoria: {type : Schema.ObjectId, ref : 'Categoria'},
  nivelMaturidade: {type : Schema.ObjectId, ref : 'NivelMaturidade'}
});

mongoose.model('AreaProcesso', areaProcesso);