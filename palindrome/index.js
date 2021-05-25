function palindrome(str) {
  for (let i = 0; i <= str.length; i++) {
    const compare = str[i] === str[str.length - i - 1];
    if (!compare) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;
