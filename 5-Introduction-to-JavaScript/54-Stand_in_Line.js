// I learned about queue.
function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();

  return removed;
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
