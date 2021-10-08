/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.
Examples:
    findInObj(
      [
        {
          first: 'Elie',
          last:"Schoppik"
        },
        {
          first: 'Tim',
          last:"Garcia",
          isCatOwner: true
        },
        {
          first: 'Matt',
          last:"Lane"
        },
        {
          first: 'Colt',
          last:"Steele",
          isCatOwner: true
        }
      ],
      'isCatOwner',
      true
    ) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

const findInObj = (arr, key, searchValue) => {
  return arr.find((el) => el[key] === searchValue);
};

const filterValues = [
  {
    first: 'Elie',
    last:"Schoppik"
  },
  {
    first: 'Tim',
    last:"Garcia",
    isCatOwner: true
  },
  {
    first: 'Matt',
    last:"Lane"
  },
  {
    first: 'Colt',
    last:"Steele",
    isCatOwner: true
  }
];

console.log(findInObj(filterValues, 'isCatOwner', true));
console.log(findInObj(filterValues, 'first', 'Matt'));
console.log(findInObj(filterValues, 'last', 'Steele'));
console.log(findInObj(filterValues, 'first', 'Samuel'));
