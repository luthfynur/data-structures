const reverseString = require("./index");

test("Reverse reverseString a string", () => {
  expect(reverseString("abcd")).toEqual("dcba");
});

test("Reverse reverseString a string", () => {
  expect(reverseString("  abcd")).toEqual("dcba  ");
});

test("Reverse reverseString a string", () => {
  expect(reverseString("lutpi")).toEqual("iptul");
});
