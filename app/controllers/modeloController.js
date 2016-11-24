var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Modelo = mongoose.model('Modelo');

module.exports = function (app) {
  app.use('/rest/modelo', router);
};

router.get('/', function (req, res, next) {
  Modelo.find(function(err, existingModelos) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingModelos);
            console.log(existingModelos);
        }
        res.end();
    });
});

router.get('/:id', function (req, res, next) {
  Modelo.findOne({ _id : req.params.id }).populate('_areasDeProcesso').exec( function(err, existingModelo) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingModelo);
            console.log(existingModelo);
        }
        res.end();
    });
});

router.post('/', function(req, res, next) {
    var newModelo = new Modelo(req.body);
    newModelo.save(function(err) {
        if (err) {
          res.status('500');
          console.log(err);
        } else {
          res.status('200');
          console.log('Modelo saved. Payload:' + newModelo);
        }
        res.end();
    });
});

router.put('/', function (req, res, next) {
  Modelo.findOne({ _id : req.body._id }, function(err, existingModelo) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            existingModelo.sigla = req.body.sigla;
            existingModelo.nome = req.body.nome;
            existingModelo.descricao = req.body.descricao;
            existingModelo._areasDeProcesso = req.body._areasDeProcesso;

            existingModelo.save();

            res.send(existingModelo);
            console.log(existingModelo);
        }
        res.end();
    });
});

router.delete('/:id', function(req, res, next) {
    Modelo.remove({
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