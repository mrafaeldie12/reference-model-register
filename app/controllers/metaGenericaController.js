  var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    MetaGenerica = mongoose.model('MetaGenerica');

module.exports = function (app) {
  app.use('/rest/metaGenerica', router);
};

router.get('/', function (req, res, next) {
  MetaGenerica.find(function(err, existingMetaGenerica) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingMetaGenerica);
            console.log(existingMetaGenerica);
        }
        res.end();
    });
});

router.get('/:id', function (req, res, next) {
  MetaGenerica.findOne({ _id : req.params.id }, function(err, existingMetaGenerica) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingMetaGenerica);
            console.log(existingMetaGenerica);
        }
        res.end();
    });
});

router.post('/', function(req, res, next) {
    var newMetaGenerica = new MetaGenerica(req.body);
    newMetaGenerica.save(function(err) {
        if (err) {
          res.status('500');
          console.log(err);
        } else {
          res.status('200');
          console.log('Area processo saved. Payload:' + newMetaGenerica);
        }
        res.end();
    });
});

router.put('/', function (req, res, next) {
  MetaGenerica.findOne({ _id : req.body._id }, function(err, existingMetaGenerica) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            existingMetaGenerica.sigla = req.body.sigla;
            existingMetaGenerica.nome = req.body.nome;
            existingMetaGenerica.descricao = req.body.descricao;

            existingMetaGenerica.save();

            res.send(existingMetaGenerica);
            console.log(existingMetaGenerica);
        }
        res.end();
    });
});

router.delete('/:id', function(req, res, next) {
    MetaGenerica.remove({
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