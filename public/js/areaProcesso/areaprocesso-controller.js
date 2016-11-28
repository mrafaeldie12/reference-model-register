referenceModelRegisterModule.controller('AreaProcessoController', ['$scope', '$http', 'AreaProcessoService', function($scope, $http, areaProcessoService) {
    function getAllAreaProcessos() {
        areaProcessoService.getAll().then(function(response) {
            $scope.retrievedAreaProcessos = response.data;
        }, function() {
            console.log('Error');
        });
    };

    $scope.localCopy = {};
    $scope.retrievedAreaProcessos = [];
    $scope.areaProcesso = {};

	getAllAreaProcessos();

    $scope.save = function() {
        $http.post('/rest/areaProcesso', $scope.areaProcesso).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };

    $scope.update = function(areaProcesso) {
        $scope.localCopy = areaProcesso;
        $http.put('/rest/areaProcesso', areaProcesso).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };
    
    $scope.delete = function(areaProcesso) {
        $http.delete('/rest/areaProcesso/' + areaProcesso._id).then(function() {
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