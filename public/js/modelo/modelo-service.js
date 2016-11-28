referenceModelRegisterModule.service('ModeloService', function($http) {
    this.getAll = function() {
        return $http.get('/rest/modelo');
    }
});