angular.module('ReferenceModelRegister', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/addCategoria', {
            templateUrl: '/addCategoria.html',
            controller: 'categoriaController'
        });

        $routeProvider.otherwise({redirectTo: '/'});


});