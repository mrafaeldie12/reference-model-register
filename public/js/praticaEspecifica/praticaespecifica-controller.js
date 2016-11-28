referenceModelRegisterModule.controller('PraticaEspecificaController', ['$scope', '$http', 'PraticaEspecificaService', function($scope, $http, praticaEspecificaService) {
    function getAllPraticaEspecificas() {
        praticaEspecificaService.getAll().then(function(response) {
            $scope.retrievedPraticaEspecificas = response.data;
        }, function() {
            console.log('Error');
        });
    };

    $scope.retrievedPraticaEspecificas = [];
    $scope.praticaEspecifica = {};

	getAllPraticaEspecificas();

    $scope.save = function() {
        $http.post('/rest/praticaEspecifica', $scope.praticaEspecifica).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };

    $scope.update = function(praticaEspecifica) {
        $http.put('/rest/praticaEspecifica', praticaEspecifica).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };
    
    $scope.delete = function(praticaEspecifica) {
        $http.delete('/rest/praticaEspecifica/' + praticaEspecifica._id).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllPraticaEspecificas();
    };
    
    $scope.getAll = function(){
    	getAllPraticaEspecificas();
    };
}]);