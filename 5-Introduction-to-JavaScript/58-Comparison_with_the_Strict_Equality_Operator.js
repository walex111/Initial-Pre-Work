// I learned about using strict equalityoperator.
// Setup
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
