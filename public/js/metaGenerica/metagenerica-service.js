referenceModelRegisterModule.service('MetaGenericaService', function($http) {
    this.getAll = function() {
        return $http.get('/rest/metaGenerica');
    }
});