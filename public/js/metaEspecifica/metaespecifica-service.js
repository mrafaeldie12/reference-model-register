referenceModelRegisterModule.service('MetaEspecificaService', function($http) {
    this.getAll = function() {
        return $http.get('/rest/metaEspecifica');
    }
});