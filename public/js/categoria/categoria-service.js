referenceModelRegisterModule.service('CategoriaService', function($http) {
    this.getAll = function() {
        return $http.get('/rest/categoria');
    }
});