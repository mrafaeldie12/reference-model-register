var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  MetaEspecifica = mongoose.model('MetaEspecifica');

module.exports = function (app) {
  app.use('/rest/MetaEspecifica', router);
};

router.get('/', function (req, res, next) {
  MetaEspecifica.find(function(err, existingMetaEspecificas) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingMetaEspecificas);
            console.log(existingMetaEspecificas);
        }
        res.end();
    });
});

router.post('/', function(req, res, next) {
    var newMetaEspecifica = new MetaEspecifica(req.body);
    newMetaEspecifica.save(function(err) {
        if (err) {
          res.status('500');
          console.log(err);
        } else {
          res.status('200');
          console.log('Area processo saved. Payload:' + newMetaEspecifica);
        }
        res.end();
    });
});

router.put('/', function (req, res, next) {
  MetaEspecifica.findOne({ _id : req.body._id }, function(err, existingMetaEspecifica) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            existingMetaEspecifica.sigla = req.body.sigla;
            existingMetaEspecifica.nome = req.body.nome;
            existingMetaEspecifica.descricao = req.body.descricao;

            existingMetaEspecifica.save();

            res.send(existingMetaEspecifica);
            console.log(existingMetaEspecifica);
        }
        res.end();
    });
});

router.delete('/:id', function(req, res, next) {
    MetaEspecifica.remove({
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