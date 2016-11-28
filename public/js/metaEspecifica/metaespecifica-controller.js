referenceModelRegisterModule.controller('MetaEspecificaController', ['$scope', '$http', 'MetaEspecificaService', function($scope, $http, metaEspecificaService) {
    function getAllMetaEspecificas() {
        metaEspecificaService.getAll().then(function(response) {
            $scope.retrievedMetaEspecificas = response.data;
        }, function() {
            console.log('Error');
        });
    };

    $scope.retrievedMetaEspecificas = [];
    $scope.metaEspecifica = {};

	getAllMetaEspecificas();

    $scope.save = function() {
        $http.post('/rest/metaEspecifica', $scope.metaEspecifica).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };

    $scope.update = function(metaEspecifica) {
        $http.put('/rest/metaEspecifica', metaEspecifica).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };
    
    $scope.delete = function(metaEspecifica) {
        $http.delete('/rest/metaEspecifica/' + metaEspecifica._id).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllMetaEspecificas();
    };
    
    $scope.getAll = function(){
    	getAllMetaEspecificas();
    };
}]);