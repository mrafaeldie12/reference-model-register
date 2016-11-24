var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  NivelCapacidade = mongoose.model('NivelCapacidade');

module.exports = function (app) {
  app.use('/rest/nivelCapacidade', router);
};

router.get('/', function (req, res, next) {
  NivelCapacidade.find(function(err, existingNivelCapacidades) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingNivelCapacidades);
            console.log(existingNivelCapacidades);
        }
        res.end();
    });
});

router.post('/', function(req, res, next) {
    var newNivelCapacidade = new NivelCapacidade(req.body);
    newNivelCapacidade.save(function(err) {
        if (err) {
          res.status('500');
          console.log(err);
        } else {
          res.status('200');
          console.log('Area processo saved. Payload:' + newNivelCapacidade);
        }
        res.end();
    });
});

router.put('/', function (req, res, next) {
  NivelCapacidade.findOne({ _id : req.body._id }, function(err, existingNivelCapacidade) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            existingNivelCapacidade.sigla = req.body.sigla;
            existingNivelCapacidade.nome = req.body.nome;
            existingNivelCapacidade.descricao = req.body.descricao;

            existingNivelCapacidade.save();

            res.send(existingNivelCapacidade);
            console.log(existingNivelCapacidade);
        }
        res.end();
    });
});

router.delete('/:id', function(req, res, next) {
    NivelCapacidade.remove({
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