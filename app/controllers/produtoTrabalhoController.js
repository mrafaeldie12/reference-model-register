var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  ProdutoTrabalho = mongoose.model('ProdutoTrabalho');

module.exports = function (app) {
  app.use('/rest/ProdutoTrabalho', router);
};

router.get('/', function (req, res, next) {
  ProdutoTrabalho.find(function(err, existingProdutoTrabalhos) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingProdutoTrabalhos);
            console.log(existingProdutoTrabalhos);
        }
        res.end();
    });
});

router.get('/:id', function (req, res, next) {
  ProdutoTrabalho.findOne({ _id : req.params.id }, function(err, existingProdutoTrabalho) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            res.send(existingProdutoTrabalho);
            console.log(existingProdutoTrabalho);
        }
        res.end();
    });
});

router.post('/', function(req, res, next) {
    var newProdutoTrabalho = new ProdutoTrabalho(req.body);
    newProdutoTrabalho.save(function(err) {
        if (err) {
          res.status('500');
          console.log(err);
        } else {
          res.status('200');
          console.log('ProdutoTrabalho saved. Payload:' + newProdutoTrabalho);
        }
        res.end();
    });
});

router.put('/', function (req, res, next) {
  ProdutoTrabalho.findOne({ _id : req.body._id }, function(err, existingProdutoTrabalho) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            existingProdutoTrabalho.nome = req.body.nome;
            existingProdutoTrabalho.descricao = req.body.template;

            existingProdutoTrabalho.save();

            res.send(existingProdutoTrabalho);
            console.log(existingProdutoTrabalho);
        }
        res.end();
    });
});

router.delete('/:id', function(req, res, next) {
    ProdutoTrabalho.remove({
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