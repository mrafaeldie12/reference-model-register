var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  NivelMaturidade = mongoose.model('NivelMaturidade');

module.exports = function (app) {
  app.use('/rest/nivelMaturidade', router);
};

router.get('/', function (req, res, next) {
  NivelMaturidade.find(function(err, existingNivelMaturidades) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingNivelMaturidades);
            console.log(existingNivelMaturidades);
        }
        res.end();
    });
});

router.get('/:id', function (req, res, next) {
  NivelMaturidade.findOne({ _id : req.params.id }, function(err, existingNivelMaturidade) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingNivelMaturidade);
            console.log(existingNivelMaturidade);
        }
        res.end();
    });
});

router.post('/', function(req, res, next) {
    var newNivelMaturidade = new NivelMaturidade(req.body);
    newNivelMaturidade.save(function(err) {
        if (err) {
          res.status('500');
          console.log(err);
        } else {
          res.status('200');
          console.log('Nivel de Maturidade saved. Payload:' + newNivelMaturidade);
        }
        res.end();
    });
});

router.put('/', function (req, res, next) {
  NivelMaturidade.findOne({ _id : req.body._id }, function(err, existingNivelMaturidade) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            existingNivelMaturidade.sigla = req.body.sigla;
            existingNivelMaturidade.nome = req.body.nome;
            existingNivelMaturidade.descricao = req.body.descricao;

            existingNivelMaturidade.save();

            res.send(existingNivelMaturidade);
            console.log(existingNivelMaturidade);
        }
        res.end();
    });
});

router.delete('/:id', function(req, res, next) {
    NivelMaturidade.remove({
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