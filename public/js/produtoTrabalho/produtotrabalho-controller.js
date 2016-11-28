referenceModelRegisterModule.controller('ProdutoTrabalhoController', ['$scope', '$http', 'ProdutoTrabalhoService', function($scope, $http, produtoTrabalhoService) {
    function getAllProdutoTrabalhos() {
        produtoTrabalhoService.getAll().then(function(response) {
            $scope.retrievedProdutoTrabalhos = response.data;
        }, function() {
            console.log('Error');
        });
    };

    $scope.retrievedProdutoTrabalhos = [];
    $scope.produtoTrabalho = {};

	getAllProdutoTrabalhos();

    $scope.save = function() {
        $http.post('/rest/produtoTrabalho', $scope.produtoTrabalho).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };

    $scope.update = function(produtoTrabalho) {
        $http.put('/rest/produtoTrabalho', produtoTrabalho).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };
    
    $scope.delete = function(produtoTrabalho) {
        $http.delete('/rest/produtoTrabalho/' + produtoTrabalho._id).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllProdutoTrabalhos();
    };
    
    $scope.getAll = function(){
    	getAllProdutoTrabalhos();
    };
}]);