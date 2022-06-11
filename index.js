// reduce executes a reduce function on each element of an array, returning a single value as a result.
//use case sum of final average
const array1 = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);