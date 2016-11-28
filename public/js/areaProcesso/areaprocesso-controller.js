referenceModelRegisterModule.controller('AreaProcessoController', ['$scope', '$http', 'AreaProcessoService', 'CategoriaService', function($scope, $http, areaProcessoService, categoriaService) {
    function getAllAreaProcessos() {
        areaProcessoService.getAll().then(function(response) {
            $scope.retrievedAreaProcessos = response.data;
        }, function() {
            console.log('Error');
        });
    };

    categoriaService.getAll().then(function(response) {
        $scope.categorias = response.data;
        }, function() {
            console.log('Error');
    });


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
}]);