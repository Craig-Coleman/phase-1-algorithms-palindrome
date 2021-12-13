function isPalindrome(word) {
  let reverseWord = word.split('').reverse().join('');
  return reverseWord === word ? true : false;
}

/* 
  Use if/else to see if argument is equal to the reverse order of the argument
  if equal return true
  if not equal (else) return false
*/

/*
  .split('') is applied to the argument, splitting all of it characters into an array
  .reverse() is then applied, reversing the order of the characters in the array
  .join('') is then applied to put the characters back together in a string
  this new string (assigned to the variable reverseWord) is then tested against the argument with an if/then
  the ternary operator is used to check if word and reverseWord are equal
  if they are, return true, if not, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("gohangasalamiimalasagnahog"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("endoplasmicreticulum"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome('mom'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome('dexoyribose'))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
