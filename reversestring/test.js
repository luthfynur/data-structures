const reverse = require("./index");

test("Reverse reverseString a string", () => {
  expect(reverse.reverseString("abcd")).toEqual("dcba");
});

test("Reverse reverseString a string", () => {
  expect(reverse.reverseString("  abcd")).toEqual("dcba  ");
});

test("Reverse reverseString a string", () => {
  expect(reverse.reverseString("lutpi")).toEqual("iptul");
});

test("Reverse reverseStringTwo a string", () => {
  expect(reverse.reverseStringTwo("nur")).toEqual("run");
});

test("Reverse reverseStringTwo a string", () => {
  expect(reverse.reverseStringTwo("wahyudi")).toEqual("iduyhaw");
});
