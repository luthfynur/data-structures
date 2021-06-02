const { reverseString, reverseStringTwo } = require("./index");

test("Reverse reverseString a string", () => {
  expect(reverseString("abcd")).toEqual("dcba");
});

test("Reverse reverseString a string", () => {
  expect(reverseString("  abcd")).toEqual("dcba  ");
});

test("Reverse reverseString a string", () => {
  expect(reverseString("lutpi")).toEqual("iptul");
});

test("Reverse reverseStringTwo a string", () => {
  expect(reverseStringTwo("nur")).toEqual("run");
});

test("Reverse reverseStringTwo a string", () => {
  expect(reverseStringTwo("wahyudi")).toEqual("iduyhaw");
});
