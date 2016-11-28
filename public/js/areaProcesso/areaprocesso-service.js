referenceModelRegisterModule.service('AreaProcessoService', function($http) {
    this.getAll = function() {
        return $http.get('/rest/areaProcesso');
    }
});