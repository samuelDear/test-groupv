/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
Examples:
    hasNoDuplicates([1,2,3,2]) // false
    hasNoDuplicates([1,2,3]) // true
*/

const hasNoDuplicates = arr => {  
  return arr.every((el, index) => {
    return arr.lastIndexOf(el) === index;
  })
};

console.log(hasNoDuplicates([1,2,3,2]));
console.log(hasNoDuplicates([1,2,3]));
console.log(hasNoDuplicates([1,2,3,3,2]));
console.log(hasNoDuplicates([1,2,3,4,5]));
