// findIndex returns the index of the first element of an array that satisfies the given test function. Otherwise it returns -1.
//use case example of books read per year
const array1 = [5, 12, 8, 130, 44, 56];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
console.log(sumWithInitial);
// expected output: 10