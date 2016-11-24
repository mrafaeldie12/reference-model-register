angular.module('ReferenceModelRegister', ['ngRoute'])
    .config(function($routeProvider){

        $routeProvider.when('/listAreaProcesso', {
            templateUrl: 'views/listAreaProcesso.html'
        });
        $routeProvider.when('/listCategoria', {
            templateUrl: '/views/listCategoria.html'
        });
        $routeProvider.when('/listModelo', {
            templateUrl: 'views/listModelo.html'
        });
        $routeProvider.when('/listNivelMaturidade', {
            templateUrl: 'views/listNivelMaturidade.html'
        });
        $routeProvider.when('/listProdutoTrabalho', {
            templateUrl: 'views/listProdutoTrabalho.html'
        });
        $routeProvider.when('/listMetaGenerica', {
            templateUrl: 'views/listMetaGenerica.html'
        });
        $routeProvider.when('/listMetaEspecifica', {
            templateUrl: 'views/listMetaEspecifica.html'
        });
        $routeProvider.when('/listNivelCapacidade', {
            templateUrl: 'views/listNivelCapacidade.html'
        });
        $routeProvider.when('/listPraticaEspecifica', {
            templateUrl: 'views/listPraticaEspecifica.html'
        });
        $routeProvider.when('/addAreaProcesso', {
            templateUrl: 'views/addAreaProcesso.html'
        });
        $routeProvider.when('/addCategoria', {
            templateUrl: '/views/addCategoria.html'
        });
        $routeProvider.when('/addModelo', {
            templateUrl: 'views/addModelo.html'
        });
        $routeProvider.when('/addNivelMaturidade', {
            templateUrl: 'views/addNivelMaturidade.html'
        });
        $routeProvider.when('/addProdutoTrabalho', {
            templateUrl: 'views/addProdutoTrabalho.html'
        });
        $routeProvider.when('/addMetaGenerica', {
            templateUrl: 'views/addMetaGenerica.html'
        });
        $routeProvider.when('/addMetaEspecifica', {
            templateUrl: 'views/addMetaEspecifica.html'
        });
        $routeProvider.when('/addNivelCapacidade', {
            templateUrl: 'views/addNivelCapacidade.html'
        });
        $routeProvider.when('/addPraticaEspecifica', {
            templateUrl: 'views/addPraticaEspecifica.html'
        });

        $routeProvider.when('/', {
            templateUrl: 'views/main.html'
        });
   


        $routeProvider.otherwise({redirectTo: '/'});


});