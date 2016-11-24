  var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    AreaProcesso = mongoose.model('AreaProcesso');

  module.exports = function (app) {
    app.use('/rest/areaProcesso', router);
  };

  router.get('/', function (req, res, next) {
    AreaProcesso.find(function(err, existingAreaProcessos) {
          if (err) {
              res.status('500');
              console.error(err);
          } else {
              res.send(existingAreaProcessos);
              console.log(existingAreaProcessos);
          }
          res.end();
      });
  });

  router.post('/', function(req, res, next) {
      var newAreaProcesso = new AreaProcesso(req.body);
      newAreaProcesso.save(function(err) {
          if (err) {
            res.status('500');
            console.log(err);
          } else {
            res.status('200');
            console.log('Area processo saved. Payload:' + newAreaProcesso);
          }
          res.end();
      });
  });

  router.put('/', function (req, res, next) {
    AreaProcesso.findOne({ _id : req.body._id }, function(err, existingAreaProcesso) {
          if (err) {
              res.status('500');
              console.error(err);
          } else {
              existingAreaProcesso.sigla = req.body.sigla;
              existingAreaProcesso.nome = req.body.nome;
              existingAreaProcesso.descricao = req.body.descricao;
              existingAreaProcesso._categoria = req.body._categoria;
              existingAreaProcesso._nivelMaturidade = req.body._categoria;

              existingAreaProcesso.save();

              res.send(existingAreaProcesso);
              console.log(existingAreaProcesso);
          }
          res.end();
      });
  });

  router.delete('/:id', function(req, res, next) {
      AreaProcesso.remove({
          _id: req.params.id
      }, function(err) {
          if (err) {
            res.status('500');
            console.log(err);
          } else {
            res.status('200');
          }
          res.end();
      });
  });