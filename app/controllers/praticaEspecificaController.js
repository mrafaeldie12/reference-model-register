var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  PraticaEspecifica = mongoose.model('PraticaEspecifica');

module.exports = function (app) {
  app.use('/rest/PraticaEspecifica', router);
};

router.get('/', function (req, res, next) {
  PraticaEspecifica.find(function(err, existingPraticaEspecificas) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingPraticaEspecificas);
            console.log(existingPraticaEspecificas);
        }
        res.end();
    });
});

router.get('/:id', function (req, res, next) {
  PraticaEspecifica.findOne({ _id : req.params.id }, function(err, existingPraticaEspecifica) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingPraticaEspecifica);
            console.log(existingPraticaEspecifica);
        }
        res.end();
    });
});

router.post('/', function(req, res, next) {
    var newPraticaEspecifica = new PraticaEspecifica(req.body);
    newPraticaEspecifica.save(function(err) {
        if (err) {
          res.status('500');
          console.log(err);
        } else {
          res.status('200');
          console.log('PraticaEspecifica saved. Payload:' + newPraticaEspecifica);
        }
        res.end();
    });
});

router.put('/', function (req, res, next) {
  PraticaEspecifica.findOne({ _id : req.body._id }, function(err, existingPraticaEspecifica) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            existingPraticaEspecifica.sigla = req.body.sigla;
            existingPraticaEspecifica.nome = req.body.nome;
            existingPraticaEspecifica.descricao = req.body.descricao;

            existingPraticaEspecifica.save();

            res.send(existingPraticaEspecifica);
            console.log(existingPraticaEspecifica);
        }
        res.end();
    });
});

router.delete('/:id', function(req, res, next) {
    PraticaEspecifica.remove({
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