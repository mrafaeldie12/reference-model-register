referenceModelRegisterModule.controller('MetaGenericaController', ['$scope', '$http', 'MetaGenericaService','MetaEspecificaService', function($scope, $http, metaGenericaService, metaEspecificaService) {
    function getAllMetaGenericas() {
        metaGenericaService.getAll().then(function(response) {
            $scope.retrievedMetaGenericas = response.data;
        }, function() {
            console.log('Error');
        });
    };
     metaGenericaService.getAll().then(function(response) {
        $scope.metaEspecifica = response.data;
        }, function() {
            console.log('Error');
    });
    
    $scope.retrievedMetaGenericas = [];
    $scope.metaGenerica = {};

	getAllMetaGenericas();

    $scope.save = function() {
        $http.post('/rest/metaGenerica', $scope.metaGenerica).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };

    $scope.update = function(metaGenerica) {
        $http.put('/rest/metaGenerica', metaGenerica).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });
    };
    
    $scope.delete = function(metaGenerica) {
        $http.delete('/rest/metaGenerica/' + metaGenerica._id).then(function() {
            console.log('Success');
        }, function() {
            console.log('Error');
        });

        getAllMetaGenericas();
    };
    
    $scope.getAll = function(){
    	getAllMetaGenericas();
    };
}]);