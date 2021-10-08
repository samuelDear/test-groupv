/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

const extractValue = (arr, key) => {
  return arr.map(el => el[key]);
};

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log(extractValue(arr, 'name'));
