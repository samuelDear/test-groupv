/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

const find = (arr, searchValue) => {
  return arr.find((el) => el === searchValue)
};

console.log(find([1,2,3,4,5], 3));
console.log(find([1,2,3,4,5], 10));
console.log(find([1,2,3,4,5], 5));
console.log(find([1,2,3,4,5], '2'));
