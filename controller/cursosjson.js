var cursosModule = angular.module('cursosModulo',[]);

cursosModule.controller("cursosController", function($scope, $http) {
    $http.get('controller/cursosjson.json').then(function(response) {
        $scope.cursos = response.data.cursos;
    })
});