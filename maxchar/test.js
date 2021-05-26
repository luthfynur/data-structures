const maxChar = require("./index");

test("Finds the most frequently used char", () => {
  expect(maxChar.maxChar("b")).toEqual("b");
  expect(maxChar.maxChar("a")).toEqual("a");
  expect(maxChar.maxCharTwo("a")).toEqual("a");
  expect(
    maxChar.maxChar("fjbsojklnavwsepokdsjknrpoisaldmsshisssssssssdas")
  ).toEqual("s");
  expect(
    maxChar.maxCharTwo("fjbsojklnavwsepokdsjknrpoisaldmsshisssssssssdas")
  ).toEqual("s");
});

test("Works with numbers in the string", () => {
  expect(maxChar.maxChar("ab1c1d1e1f1g1")).toEqual("1");
  expect(maxChar.maxCharTwo("ab1c2d1e1f1g1")).toEqual("1");
});
