const { anagrams, anagramsTwo } = require("./index.js");

test('"hello" is an anagram of "llohe"', () => {
  expect(anagrams("hello", "llohe")).toBeTruthy();
});

test('"hello" is an anagram of "llohe" with anagramsTwo function', () => {
  expect(anagramsTwo("hello", "llohe")).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagrams("Whoa! Hi!", "Hi! Whoa!")).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!" with anagramsTwo function', () => {
  expect(anagramsTwo("Whoa! Hi!", "Hi! Whoa!")).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagrams("One One", "Two two two")).toBeFalsy();
});

test('"One One" is not an anagram of "Two two two" with anagramsTwo function', () => {
  expect(anagramsTwo("One One", "Two two two")).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagrams("One one", "One one c")).toBeFalsy();
});

test('"One one" is not an anagram of "One one c" with anagramsTwo function', () => {
  expect(anagramsTwo("One one", "One one c")).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagrams("A tree, a life, a bench", "A tree, a fence, a yard")
  ).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard" with anagramsTwo function', () => {
  expect(
    anagramsTwo("A tree, a life, a bench", "A tree, a fence, a yard")
  ).toBeFalsy();
});
