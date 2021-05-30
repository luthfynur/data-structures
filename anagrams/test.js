const anagrams = require("./index.js");

test('"hello" is an anagram of "llohe"', () => {
  expect(anagrams.anagrams("hello", "llohe")).toBeTruthy();
});

test('"hello" is an anagram of "llohe" with anagramsTwo function', () => {
  expect(anagrams.anagramsTwo("hello", "llohe")).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagrams.anagrams("Whoa! Hi!", "Hi! Whoa!")).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!" with anagramsTwo function', () => {
  expect(anagrams.anagramsTwo("Whoa! Hi!", "Hi! Whoa!")).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagrams.anagrams("One One", "Two two two")).toBeFalsy();
});

test('"One One" is not an anagram of "Two two two" with anagramsTwo function', () => {
  expect(anagrams.anagramsTwo("One One", "Two two two")).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagrams.anagrams("One one", "One one c")).toBeFalsy();
});

test('"One one" is not an anagram of "One one c" with anagramsTwo function', () => {
  expect(anagrams.anagramsTwo("One one", "One one c")).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagrams.anagrams("A tree, a life, a bench", "A tree, a fence, a yard")
  ).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard" with anagramsTwo function', () => {
  expect(
    anagrams.anagramsTwo("A tree, a life, a bench", "A tree, a fence, a yard")
  ).toBeFalsy();
});
