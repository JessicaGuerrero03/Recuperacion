//map es un array method que nos permite iterar sobre un arreglo 
//la función callback provista una vez por elemento de un array, y construye un nuevo array con los resultados.

//El siguiente código toma una serie de edades y crea nuevas edades que contiene los alumnos de nuevo ingreso.
//Ejemplo practico
var kvArray = [{alumno:1, edad:10},
               {alumno:2, edad:20},
               {alumno:3, edad: 30}];

var reformattedArray = kvArray.map(function(obj){
   var rObj = {};
   rObj[obj.alumno] = obj.edad;
   return rObj;
});