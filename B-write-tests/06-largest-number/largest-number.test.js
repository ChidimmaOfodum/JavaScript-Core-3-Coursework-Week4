let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  // Act
  // Assert

  let input = [3, 21, 88, 4, 36];
  let exp = 88;
  let out = getLargestNumber(input);
  expect(out).toEqual(exp)
  expect(input).toEqual([3, 21, 88, 4, 36]);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
