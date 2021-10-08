/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
Examples:
    filterByValue([
      {
        first: 'Elie', last:"Schoppik"
      },
      {
        first: 'Tim', last:"Garcia",
        isCatOwner: true
      },
      {
        first: 'Matt', last:"Lane"
      },
      {
        first: 'Colt',
        last:"Steele",
        isCatOwner: true
      }
    ],
    'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

const filterByValue = (arr = [], key) => {
  return arr.filter((el) => el.hasOwnProperty(key));
};

const arrayToFilter = [
  {
    first: 'Elie', last:"Schoppik"
  },
  {
    first: 'Tim', last:"Garcia",
    isCatOwner: true
  },
  {
    first: 'Matt', last:"Lane"
  },
  {
    first: 'Colt',
    last:"Steele",
    isCatOwner: true
  },
  {
    first: 'Colt',
    isCatOwner: true
  }
];

console.log(filterByValue(arrayToFilter, 'isCatOwner'));
console.log(filterByValue(arrayToFilter, 'first'));
console.log(filterByValue(arrayToFilter, 'last'));
