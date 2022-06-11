//Hoisting is a term that you will not find used in any specification prior to ECMAScript® 2015 Language Specification. The concept of hoisting was intended as a general way of referring to how execution contexts work in JavaScript (specifically the creation and execution phases). However, the concept can be a bit confusing at first.
//use case: anger changing the name of the person example below
function nombreDelGato(nombre) {
   console.log("El nombre de mi gato es " + nombre);
 }
 
 nombreDelGato("michi");
 /*
 El resultado del código es: "El nombre de mi gato es Maurizzio"
 */