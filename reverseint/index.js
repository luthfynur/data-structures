function reverseInt(n) {
  const reversedInput = parseInt(n.toString().split("").reverse().join(""));
  return reversedInput * Math.sign(n);
}

module.exports = reverseInt;
