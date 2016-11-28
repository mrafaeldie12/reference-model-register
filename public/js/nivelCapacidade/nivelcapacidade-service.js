referenceModelRegisterModule.service('NivelCapacidadeService', function($http) {
    this.getAll = function() {
        return $http.get('/rest/nivelCapacidade');
    }
});