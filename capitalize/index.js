function capitalize(str) {
  const newString = [];

  for (let word of str.split(" ")) {
    const firstLetter = word[0].toUpperCase();
    const sliced = word.slice(1);
    const newWord = firstLetter + sliced;
    newString.push(newWord);
  }

  return newString.join(" ");
}

function capitalizeTwo(str) {
  let newString = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      newString += str[i].toUpperCase();
    } else {
      newString += str[i];
    }
  }

  return newString;
}

module.exports = {
  capitalize,
  capitalizeTwo,
};
