referenceModelRegisterModule.service('PraticaEspecificaService', function($http) {
    this.getAll = function() {
        return $http.get('/rest/praticaEspecifica');
    }
});