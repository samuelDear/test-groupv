/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it.
The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true,
the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
Examples:
    function isEven(val){
        return val % 2 === 0;
    }
    var arr = [1,2,3,4,5,6,7,8];
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

const partition = (arr, callback) => {  
  const res = [[], []];
  arr.forEach((el) => {
    if(callback(el)) {
      res[0] = [...res[0], el];
    } else {
      res[1] = [...res[1], el];
    }
  });

  return res;
}

const names = ['Elie', 'Colt', 'Tim', 'Matt'];
const arr = [1,2,3,4,5,6,7,8];

console.log(partition(names, isLongerThanThreeCharacters));
console.log(partition(arr, isEven));

function isLongerThanThreeCharacters(val){
  return val.length > 3;
}

function isEven(val){
  return val % 2 === 0;
}
