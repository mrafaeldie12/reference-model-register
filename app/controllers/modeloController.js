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

            pdfDocument.fontSize(22)
            .text(existingModelo.nome)
            .fontSize(20)
            .text('\nInformações:')
            .fontSize(18)
            .text('Sigla: ' + existingModelo.sigla)
            .text('Descrição: ' + existingModelo.descricao)
            .text('\n');
            if(existingModelo._areaProcesso){
                pdfDocument.fontSize(20)
                .text('Áreas de Processo:')
                .text('\n');
                for(var index=0; index < existingModelo._areaProcesso.length; index++) {
                    var areaProcesso = existingModelo._areaProcesso[index];

                    var categoria = areaProcesso._categoria ? areaProcesso._categoria.nome : 'Sem Categoria';
                    var nivelMaturidade = areaProcesso._nivelMaturidade ? areaProcesso._nivelMaturidade.nome : 'Sem Nível de Maturidade';

                    pdfDocument.fontSize(18)
                    .text('Área de Processo ' + index)
                    .fontSize(16)
                    .text('Sigla: ' + areaProcesso.sigla)
                    .text('Nome: ' + areaProcesso.nome)
                    .text('Descrição: ' + areaProcesso.descricao)
                    .text('Categoria de Processo: ' + categoria)
                    .text('Nível de Maturidade: ' + nivelMaturidade)
                    .text('\n');

                    if(areaProcesso._metaEspecifica && areaProcesso._metaEspecifica.length > 0){
                        pdfDocument.fontSize(20)
                        .text('Metas Específicas:')
                        .text('\n');
                        for(var metaIndex =0; metaIndex < areaProcesso._metaEspecifica.length; metaIndex++) {
                            var metaEspecifica = areaProcesso._metaEspecifica[metaIndex];

                            pdfDocument.fontSize(18)
                            .text('Meta Específica ' + metaIndex)
                            .fontSize(16)
                            .text('Sigla: ' + metaEspecifica.sigla)
                            .text('Nome: ' + metaEspecifica.nome)
                            .text('Descrição: ' + metaEspecifica.descricao)
                            .text('\n');
                            
                            if(metaEspecifica._praticaEspecifica && metaEspecifica._praticaEspecifica.length > 0){
                                pdfDocument.fontSize(20)
                                .text('Práticas Específicas:\n')
                                .text('\n');
                                for(var praticaIndex = 0; praticaIndex < metaEspecifica._praticaEspecifica.length; praticaIndex++){
                                    var praticaEspecifica = metaEspecifica._praticaEspecifica[praticaIndex];

                                    pdfDocument.fontSize(18)
                                    .text('Prática Específica ' + metaIndex)
                                    .fontSize(16)
                                    .text('Sigla: ' + praticaEspecifica.sigla)
                                    .text('Nome: ' + praticaEspecifica.nome)
                                    .text('Descrição: ' + praticaEspecifica.descricao)
                                    .text('\n');
                                }
                            } else {
                                pdfDocument.fontSize(20)
                                .text('Sem Práticas Específicas')
                                .text('\n');
                            }
                        }
                    } else {
                        pdfDocument.fontSize(20)
                        .text('Sem Metas Específicas')
                        .text('\n');
                    }
                }
            } else {
                pdfDocument.fontSize(20)
                .text('Sem Áreas de Processo')
                .text('\n');
            }

            pdfDocument.end();
        }
    });
});