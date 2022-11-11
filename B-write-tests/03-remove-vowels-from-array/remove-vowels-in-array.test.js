let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert

  let input = ["Irina", "Etza", "Daniel"];
  let exp = ["rn", "tz", "Dnl"];
  let out = removeVowelsFromWords(input)
  expect(out).toEqual(exp)
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

