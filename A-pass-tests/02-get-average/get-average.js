// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
   let numbersArray = numbers.filter(x => typeof x === "number");
   return numbersArray.reduce((a,b) => a + b) / numbersArray.length;
}

module.exports = average;
