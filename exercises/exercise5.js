/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled
(HINT - you can use map and fitler to double and then filter the odd numbers).
Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

const doubleOddNumbers = arr => {
  return arr.filter((el) => el % 2 !== 0).map(el => el * 2);
}

console.log(doubleOddNumbers([1,2,3,4,5]));
console.log(doubleOddNumbers([4,4,4,4,4]));
console.log(doubleOddNumbers([1,2,3,4,5,6,7,8,9,10]));
