const { maxChar, maxCharTwo } = require("./index");

test("Finds the most frequently used char", () => {
  expect(maxChar("b")).toEqual("b");
  expect(maxChar("a")).toEqual("a");
  expect(maxCharTwo("a")).toEqual("a");
  expect(maxChar("fjbsojklnavwsepokdsjknrpoisaldmsshisssssssssdas")).toEqual(
    "s"
  );
  expect(maxCharTwo("fjbsojklnavwsepokdsjknrpoisaldmsshisssssssssdas")).toEqual(
    "s"
  );
});

test("Works with numbers in the string", () => {
  expect(maxChar("ab1c1d1e1f1g1")).toEqual("1");
  expect(maxCharTwo("ab1c2d1e1f1g1")).toEqual("1");
});
