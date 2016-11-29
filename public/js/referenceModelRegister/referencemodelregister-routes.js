referenceModelRegisterModule.config(function($routeProvider){

        $routeProvider.when('/listAreaProcesso', {
            templateUrl: 'views/areaProcesso/listAreaProcesso.html'
        });
        $routeProvider.when('/listCategoria', {
            templateUrl: '/views/categoria/listCategoria.html'
        });
        $routeProvider.when('/listModelo', {
            templateUrl: 'views/modelo/listModelo.html'
        });
        $routeProvider.when('/listNivelMaturidade', {
            templateUrl: 'views/nivelMaturidade/listNivelMaturidade.html'
        });
        $routeProvider.when('/listProdutoTrabalho', {
            templateUrl: 'views/produtoTrabalho/listProdutoTrabalho.html'
        });
        $routeProvider.when('/listMetaGenerica', {
            templateUrl: 'views/metaGenerica/listMetaGenerica.html'
        });
        $routeProvider.when('/listMetaEspecifica', {
            templateUrl: 'views/metaEspecifica/listMetaEspecifica.html'
        });
        $routeProvider.when('/listNivelCapacidade', {
            templateUrl: 'views/nivelCapacidade/listNivelCapacidade.html'
        });
        $routeProvider.when('/listPraticaEspecifica', {
            templateUrl: 'views/praticaEspecifica/listPraticaEspecifica.html'
        });
        $routeProvider.when('/addAreaProcesso', {
            templateUrl: 'views/areaProcesso/addAreaProcesso.html'
        });
        $routeProvider.when('/addCategoria', {
            templateUrl: '/views/categoria/addCategoria.html'
        });
        $routeProvider.when('/addModelo', {
            templateUrl: 'views/modelo/addModelo.html'
        });
        $routeProvider.when('/addNivelMaturidade', {
            templateUrl: 'views/nivelMaturidade/addNivelMaturidade.html'
        });
        $routeProvider.when('/addProdutoTrabalho', {
            templateUrl: 'views/produtoTrabalho/addProdutoTrabalho.html'
        });
        $routeProvider.when('/addMetaGenerica', {
            templateUrl: 'views/metaGenerica/addMetaGenerica.html'
        });
        $routeProvider.when('/addMetaEspecifica', {
            templateUrl: 'views/metaEspecifica/addMetaEspecifica.html'
        });
        $routeProvider.when('/addNivelCapacidade', {
            templateUrl: 'views/nivelCapacidade/addNivelCapacidade.html'
        });
        $routeProvider.when('/addPraticaEspecifica', {
            templateUrl: 'views/praticaEspecifica/addPraticaEspecifica.html'
        });
//Mostra individual'
        $routeProvider.when('/mostraAreaProcesso/:id', {
            templateUrl: 'views/areaProcesso/mostraAreaProcesso.html'
        });
        $routeProvider.when('/mostraCategoria/:id', {
            templateUrl: 'views/categoria/mostraCategoria.html'
        });
        $routeProvider.when('/mostraMetaEspecifica/:id', {
            templateUrl: 'views/metaEspecifica/mostraMetaEspecifica.html'
        });
        $routeProvider.when('/mostraMetaGenerica/:id', {
            templateUrl: 'views/metaGenerica/mostraMetaGenerica.html'
        });
        $routeProvider.when('/mostraModelo/:id', {
            templateUrl: 'views/modelo/mostraModelo.html'
        });
        $routeProvider.when('/mostraNivelCapacidade/:id', {
            templateUrl: 'views/nivelCapacidade/mostraNivelCapacidade.html'
        });
        $routeProvider.when('/mostraNivelMaturidade/:id', {
            templateUrl: 'views/nivelMaturidade/mostraNivelMaturidade.html'
        });
        $routeProvider.when('/mostraPraticaEspecifica/:id', {
            templateUrl: 'views/praticaEspecifica/mostraPraticaEspecifica.html'
        });
        $routeProvider.when('/mostraProdutoTrabalho/:id', {
            templateUrl: 'views/produtoTrabalho/mostraProdutoTrabalho.html'
        });
         $routeProvider.when('/listEverything', {
            templateUrl: 'views/everything/listEverything.html'
        });

        $routeProvider.when('/', {
            templateUrl: 'views/main.html'
        });
   


        $routeProvider.otherwise({redirectTo: '/'});


});