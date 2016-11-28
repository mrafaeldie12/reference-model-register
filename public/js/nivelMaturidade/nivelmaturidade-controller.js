referenceModelRegisterModule.controller('NivelMaturidadeController', ['$scope', '$http', 'NivelMaturidadeService', function($scope, $http, nivelMaturidadeService) {
    function getAllNivelMaturidades() {
        nivelMaturidadeService.getAll().then(function(response) {
            $scope.retrievedNivelMaturidades = response.data;
        }, function() {
            console.log('Error');
        });
    };

    $scope.retrievedNivelMaturidades = [];
    $scope.nivelMaturidade = {};

	getAllNivelMaturidades();

    $scope.save = function() {
        $http.post('/rest/nivelMaturidade', $scope.nivelMaturidade).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };

    $scope.update = function(nivelMaturidade) {
        $http.put('/rest/nivelMaturidade', nivelMaturidade).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };
    
    $scope.delete = function(nivelMaturidade) {
        $http.delete('/rest/nivelMaturidade/' + nivelMaturidade._id).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllNivelMaturidades();
    };
    
    $scope.getAll = function(){
    	getAllNivelMaturidades();
    };
}]);