var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    PDFDocument = require('pdfkit')
    fileSystem = require('fs'),
    Modelo = mongoose.model('Modelo');

module.exports = function(app) {
    app.use('/rest/modelo', router);
};

router.get('/', function(req, res, next) {
    Modelo.find().populate('_areaProcesso').exec(function(err, existingModelos) {
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

router.get('/:id', function(req, res, next) {
    Modelo.findOne({
        _id: req.params.id
    }).populate('_areaProcesso').exec(function(err, existingModelo) {
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

router.put('/', function(req, res, next) {
    Modelo.findOne({
        _id: req.body._id
    }, function(err, existingModelo) {
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

router.get('/form/:id', function(req, res, next) {
    Modelo.findOne({
        _id: req.params.id
    }).populate({
        path: '_areaProcesso',
        populate: [{
            path: '_metaEspecifica',
            model: 'MetaEspecifica',
            populate: {
                path: '_praticaEspecifica',
                model: 'PraticaEspecifica'
            }
        }, {
            path: '_nivelMaturidade',
            model: 'NivelMaturidade'
        },
        {
            path: '_categoria',
            model: 'Categoria'
        }]
    }).exec(function(err, existingModelo) {
        if (err) {
            res.status('500');
            console.error(err);
        } else {
            var pdfDocument = new PDFDocument();

            pdfDocument.pipe(res, function(){
                res.end();
            });

            pdfDocument.fontSize(22);
            pdfDocument.text(existingModelo.nome);
            pdfDocument.text(existingModelo.sigla);
            pdfDocument.text(existingModelo.descricao);
            pdfDocument.end();
            
            //res.download(pdfFileName);
        }
    });
});