// I learned to test objects for properties.
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
 if( myObj.hasOwnProperty(checkProp)){
   return myObj[checkProp];
 } else {
   return "Not Found"
 }

}

// Test your code by modifying these values
checkObj("gift");
