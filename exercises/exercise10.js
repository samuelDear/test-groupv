/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it 
with each object now including the key and value passed to the function.
Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

const addKeyAndValue = (arr, key, value) => {  
  return arr.map((el) => ({
    [key]: value,
    ...el
  }))
}

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

console.log(addKeyAndValue(arr, 'title', 'Instructor'));
console.log(addKeyAndValue(arr, 'ocupation', 'Teacher'));
console.log(addKeyAndValue(addKeyAndValue(arr, 'Country', 'Venezuela'), 'ocupation', 'Teacher'));
