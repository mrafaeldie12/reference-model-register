areaProcessoModule.controller('AreaProcessoController', ['$scope', '$http', 'AreaProcessoService', function($scope, $http, areaProcessoService) {
    function getAllAreaProcessos() {
        AreaProcessoService.getAll().then(function(response) {
            $scope.retrievedAreaProcessos = response.data;
        }, function() {
            console.log('Error');
        });
    };

    $scope.localCopy = {};
    $scope.retrievedAreaProcessos = [];

	getAllAreaProcessos();

    $scope.save = function(areaProcesso) {
        $scope.localCopy = areaProcesso;
        $http.post('/areaProcesso', areaProcesso).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllAreaProcessos();
    };

    $scope.update = function(areaProcesso) {
        $scope.localCopy = areaProcesso;
        $http.put('/areaProcesso', areaProcesso).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllAreaProcessos();
    };
    
    $scope.delete = function(areaProcesso) {
        $http.delete('/areaProcesso/' + areaProcesso._id).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllAreaProcessos();
    };
    
    $scope.getAll = function(){
    	getAllAreaProcessos();
    };

    $scope.reset = function() {
        $scope.areaProcesso = angular.copy($scope.localCopy);
    };
    $scope.reset();
}]);