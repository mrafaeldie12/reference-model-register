angular.module('ReferenceModelRegister', ['ngRoute'])
    .config(function($routeProvider){

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
        $routeProvider.when('/confirmaCategoria', {
            templateUrl: 'views/confirmaCategoria.html'
            controller: 'categoriaController'
        });


        $routeProvider.otherwise({redirectTo: '/'});


});