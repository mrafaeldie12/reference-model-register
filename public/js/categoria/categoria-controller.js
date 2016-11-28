referenceModelRegisterModule.controller('CategoriaController', ['$scope', '$http', 'CategoriaService', function($scope, $http, categoriaService) {
    function getAllCategorias() {
        categoriaService.getAll().then(function(response) {
            $scope.retrievedCategorias = response.data;
        }, function() {
            console.log('Error');
        });
    };

    $scope.retrievedCategorias = [];
    $scope.categoria = {};

	getAllCategorias();

    $scope.save = function() {
        $http.post('/rest/categoria', $scope.categoria).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };

    $scope.update = function(categoria) {
        $http.put('/rest/categoria', categoria).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };
    
    $scope.delete = function(categoria) {
        $http.delete('/rest/categoria/' + categoria._id).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllCategorias();
    };
    
    $scope.getAll = function(){
    	getAllCategorias();
    };
}]);