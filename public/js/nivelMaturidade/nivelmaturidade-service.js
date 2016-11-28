referenceModelRegisterModule.service('NivelMaturidadeService', function($http) {
    this.getAll = function() {
        return $http.get('/rest/nivelMaturidade');
    }
});