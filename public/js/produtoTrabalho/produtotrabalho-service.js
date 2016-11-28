referenceModelRegisterModule.service('ProdutoTrabalhoService', function($http) {
    this.getAll = function() {
        return $http.get('/rest/produtoTrabalho');
    }
});