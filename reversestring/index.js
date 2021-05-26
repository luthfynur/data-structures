// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  return reversedString;
}

function reverseStringTwo(str) {
  return str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
}

module.exports = {
  reverseString,
  reverseStringTwo,
};
