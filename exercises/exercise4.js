/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

const removeVowels = str => {
  const strArr = [...str.toLowerCase()];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const strNoVowels = strArr.filter((el) => !vowels.includes(el));
  return strNoVowels.join('');
}

console.log(removeVowels('Hola'));
console.log(removeVowels('Elie'));
console.log(removeVowels('TIM'));
console.log(removeVowels('ZZZZZZ'));
console.log(removeVowels('Hello There'));