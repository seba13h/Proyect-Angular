function AlumnoController($scope){
    $scope.alumnos =[
    { nombre: "Sebastian rodriguez",curso: "3° medio"},
    { nombre: "veronica valenzuela",curso: "4° medio"},
    { nombre: "emilio valdivieso",curso: "5° medio"},
    { nombre: "cristian jimenez",curso: "6° medio"},
    { nombre: "maria ramirez",curso: "7° medio"},
    { nombre: "constanza martinez",curso: "8° medio"},
    { nombre: "claudia burgos",curso: "9° medio"}
    ];
    $scope.Save=function(){
        $scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre , curso:$scope.nuevoAlumno.curso})
        $scope.formVisibility=false;
        console.log($scope.formVisibility)
    }
    $scope.formVisibility = false;
    $scope.ShowForm=function(){
        $scope.formVisibility=true;
        console.log($scope.formVisibility)
    }
 }


