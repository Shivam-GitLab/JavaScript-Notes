function calculateCartPrice(...num1) {
  // ... rest operator
  return num1;
}

console.log(calculateCartPrice(20, 40, 60, 80, 100, 120));
// [ 20, 40, 60, 80, 100, 120 ]
// Path: 20%20Functions%20with%20objects%20and%20array%20in%20javascript/FunctionSec.js

function calculateCartPrice(val1, val2, ...num1) {
  // ... rest operator
  return num1;
}

console.log(calculateCartPrice(20, 40, 60, 80, 100, 120));
// [ 60, 80, 100, 120 ]
// 20 and 40 are assigned to val1 and val2 and rest of the values are assigned to num1

