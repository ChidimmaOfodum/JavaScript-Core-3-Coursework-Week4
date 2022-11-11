function getLargestNumber(array) {
  let largestNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

console.log(getLargestNumber([0,3,8,10]));
console.log(getLargestNumber([0,3,8,65,-10]));
console.log(getLargestNumber([-4,3,8,100]));
console.log(getLargestNumber([0, -3,-8,-10]));

module.exports = getLargestNumber;
