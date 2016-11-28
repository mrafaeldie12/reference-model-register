referenceModelRegisterModule.controller('NivelCapacidadeController', ['$scope', '$http', 'NivelCapacidadeService', function($scope, $http, nivelCapacidadeService) {
    function getAllNivelCapacidades() {
        nivelCapacidadeService.getAll().then(function(response) {
            $scope.retrievedNivelCapacidades = response.data;
        }, function() {
            console.log('Error');
        });
    };

    $scope.retrievedNivelCapacidades = [];
    $scope.nivelCapacidade = {};

	getAllNivelCapacidades();

    $scope.save = function() {
        $http.post('/rest/nivelCapacidade', $scope.nivelCapacidade).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };

    $scope.update = function(nivelCapacidade) {
        $http.put('/rest/nivelCapacidade', nivelCapacidade).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };
    
    $scope.delete = function(nivelCapacidade) {
        $http.delete('/rest/nivelCapacidade/' + nivelCapacidade._id).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllNivelCapacidades();
    };
    
    $scope.getAll = function(){
    	getAllNivelCapacidades();
    };
}]);