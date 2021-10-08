/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
Examples:
    extractKey(
      [
        {
          name: 'Elie'
        },
        {
          name: 'Tim'
        },
        {
          name: 'Matt'
        },
        {
          name: 'Colt'
        }
      ],
      'name'
    ) // ['Elie', 'Tim', 'Matt', 'Colt']
*/

const extractKey = (arr, key) => {
  return arr.map(el => el[key]);
};

const arrayValues = [
  {
    name: 'Elie',
    lastname: 'Page'
  },
  {
    name: 'Tim',
    lastname: 'Burton'
  },
  {
    name: 'Matt',
    lastname: 'Hernandez'
  },
  {
    name: 'Colt',
    lastname: 'Rojas'
  }
];

console.log(extractKey(arrayValues, 'name'));
console.log(extractKey(arrayValues, 'lastname'));
