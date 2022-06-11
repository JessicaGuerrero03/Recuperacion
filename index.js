// filter crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
//caso de uso: seleccion de frutas 
//EJEMPLO PRACTICO
const words = ['cantaloupe', 'watermelon', 'strawberry', 'guava', 'peach'];

const result = words.filter(word => word.length > 6);

console.log(result);