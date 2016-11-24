var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Categoria = mongoose.model('Categoria');

module.exports = function (app) {
  app.use('/rest/categoria', router);
};

router.get('/', function (req, res, next) {
  Categoria.find(function(err, existingCategorias) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingCategorias);
            console.log(existingCategorias);
        }
        res.end();
    });
});

router.post('/', function(req, res, next) {
    var newCategoria = new Categoria(req.body);
    newCategoria.save(function(err) {
        if (err) {
          res.status('500');
          console.log(err);
        } else {
          res.status('200');
          console.log('Categoria saved. Payload:' + newCategoria);
        }
        res.end();
    });
});

router.put('/', function (req, res, next) {
  Categoria.findOne({ _id : req.body._id }, function(err, existingCategoria) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            categoria.nome = req.body.nome;

            existingCategoria.save();

            res.send(existingCategoria);
            console.log(existingCategoria);
        }
        res.end();
    });
});

router.delete('/:id', function(req, res, next) {
    Categoria.remove({
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