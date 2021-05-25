const palindrome = require("./index");

test("'aba' is a palindrome", () => {
  expect(palindrome("aba")).toBeTruthy();
});

test("' aba' is not a palindrome", () => {
  expect(palindrome(" aba")).toBeFalsy();
});

test("'kodok' is a palindrome", () => {
  expect(palindrome("kodok")).toBeTruthy();
});
