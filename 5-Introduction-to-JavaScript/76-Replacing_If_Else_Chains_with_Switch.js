// I learned to use switchstatement to replace if-else statement.

  function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
    case "bob":
    return "Marley";
    break;
    case 42:
    return "The Answer";
    break;
    case 1:
    return "There is no #1";
    break;
    case 99:
    return "Missed me by this much!";
    case 7:
    return "Ate Nine"
    break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
