var professoresModule = angular.module('professoresModulo',[])

professoresModule.controller("professoresController", function($scope) {
    $scope.professores = [
        {codigo: '1', nome:'Jefferson', email:'email@email.com', fone:'11 2121 2121' },
        {codigo: '2', nome:'Jefferson', email:'email@email.com', fone:'11 2121 2121' },
        {codigo: '3', nome:'Jefferson', email:'email@email.com', fone:'11 2121 2121' }
    ];

    $scope.selecionaProfessor = function(professorSelecionado) {
        $scope.professor = professorSelecionado;
    }

    $scope.novo = function() {
        $scope.professor = {};
    }
    $scope.salvar = function() {
        $scope.professores.push($scope.professor);
        $scope.novo();
    }
    $scope.excluir = function() {
        $scope.professores.splice($scope.professores.indexOf($scope.professor.codigo));
        $scope.novo();
    }

})