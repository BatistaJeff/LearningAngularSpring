var cursosModule = angular.module('cursosModulo',[])

cursosModule.controller("cursosController", function($scope) {
    $scope.cursos = [
        {codigo: '1', nome:'Java Para Web', diashorarios:'Segunda e quarda, 19hr', professor:{
            codigo: '1', nome:'Jefferson', email:'email@email.com', fone:'11 2121 2121' }
        },
        {codigo: '2', nome:'Linguagem R', diashorarios:'Segunda a sexta, 17hr', professor:{
            codigo: '2', nome:'Antonio nunes', email:'email@email.com', fone:'11 2121 2121' }
         }
    ];

    $scope.professores = [
        {codigo: '1', nome:'Jefferson', email:'email@email.com', fone:'11 2121 2121' },
        {codigo: '2', nome:'Antonio nunes', email:'email@email.com', fone:'11 2121 2121' }
    ];

    $scope.selecionaCurso = function(cursoSelecionado) {
        $scope.curso = cursoSelecionado;
    }

    $scope.novo = function() {
        $scope.curso = {};
    }
    $scope.salvar = function() {
        $scope.cursos.push($scope.curso);
        $scope.professores.push($scope.professor);
        $scope.novo();
    }
    $scope.excluir = function() {
        $scope.cursos.splice($scope.cursos.indexOf($scope.curso.codigo));
        $scope.novo();
    }

})