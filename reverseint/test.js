const reverseInt = require("./index");

test("Reverse input = 0", () => {
  expect(reverseInt(0)).toEqual(0);
});

test("Reverse positive input", () => {
  expect(reverseInt(1)).toEqual(1);
  expect(reverseInt(123)).toEqual(321);
  expect(reverseInt(6969)).toEqual(9696);
  expect(reverseInt(720)).toEqual(27);
});

test("Reverse negative input", () => {
  expect(reverseInt(-1)).toEqual(-1);
  expect(reverseInt(-69)).toEqual(-96);
  expect(reverseInt(-887)).toEqual(-788);
  expect(reverseInt(-90)).toEqual(-9);
});
