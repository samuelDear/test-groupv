/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

const vowelCount = str => {
  const strArr = [...str.toLowerCase()];
  const vowels = ['a','e','i','o','u'];
  const res = [];

  strArr.forEach((val) => {
    if (vowels.includes(val)) {
      if (res.hasOwnProperty(val)) {
        res[val]++;
      } else {
        res[val]=1;
      }
    }
  });

  return res;
}

console.log(vowelCount('Elie'));
console.log(vowelCount('Tim'));
console.log(vowelCount('Matt'));
console.log(vowelCount('hmmm'));
console.log(vowelCount('I Am awesome and so are you'));
