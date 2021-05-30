const chunk = require("./index");

test("chunk divides an array of 10 elements with chunk size 2", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk.chunk(arr, 2);

  expect(chunked).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test("chunk divides an array of 10 elements with chunkTwo size 2", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk.chunkTwo(arr, 2);

  expect(chunked).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test("chunk divides an array of 3 elements with chunk size 1", () => {
  const arr = [1, 2, 3];
  const chunked = chunk.chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test("chunk divides an array of 3 elements with chunkTwo size 1", () => {
  const arr = [1, 2, 3];
  const chunked = chunk.chunkTwo(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test("chunk divides an array of 5 elements with chunk size 3", () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk.chunk(arr, 3);

  expect(chunked).toEqual([
    [1, 2, 3],
    [4, 5],
  ]);
});

test("chunk divides an array of 5 elements with chunkTwo size 3", () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk.chunkTwo(arr, 3);

  expect(chunked).toEqual([
    [1, 2, 3],
    [4, 5],
  ]);
});

test("chunk divides an array of 13 elements with chunk size 5", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk.chunk(arr, 5);

  expect(chunked).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13],
  ]);
});

test("chunk divides an array of 13 elements with chunkTwo size 5", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk.chunkTwo(arr, 5);

  expect(chunked).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13],
  ]);
});
