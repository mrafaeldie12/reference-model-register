referenceModelRegisterModule.controller('ModeloController', ['$scope', '$http', 'ModeloService', function($scope, $http, modeloService) {
    function getAllModelos() {
        modeloService.getAll().then(function(response) {
            $scope.retrievedModelos = response.data;
        }, function() {
            console.log('Error');
        });
    };

    $scope.retrievedModelos = [];
    $scope.modelo = {};

	getAllModelos();

    $scope.save = function() {
        $http.post('/rest/modelo', $scope.modelo).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };

    $scope.update = function(modelo) {
        $http.put('/rest/modelo', modelo).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };
    
    $scope.delete = function(modelo) {
        $http.delete('/rest/modelo/' + modelo._id).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllModelos();
    };
    
    $scope.getAll = function(){
    	getAllModelos();
    };
}]);