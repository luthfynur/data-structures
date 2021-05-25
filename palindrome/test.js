const palindrome = require("./index");

test("aba adalah palindrome", () => {
  expect(palindrome("aba")).toBeTruthy();
});
