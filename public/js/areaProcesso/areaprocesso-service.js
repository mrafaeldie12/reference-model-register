areaProcessoModule.service('AreaProcessoService', function($http) {
    this.getAll = function() {
        return $http.get('/areaProcesso');
    }
});