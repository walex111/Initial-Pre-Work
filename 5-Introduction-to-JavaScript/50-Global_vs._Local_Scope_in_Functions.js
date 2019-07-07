// I learned to change the global variable with local variable in the function.
// Setup
var outerWear = "T-Shirt";

function myOutfit() {

  var outerWear = "sweater";

  return outerWear;
}

myOutfit();
