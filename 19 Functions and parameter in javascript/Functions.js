function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("H");
}

// console.log("Function Call");
// sayMyName();

function addTwoNumbers(a, b) {
  //   return a + b;
  console.log(a + b);
}

const results = addTwoNumbers(10, 20);
console.log(results);
// 30
// undefined Because addTwoNumbers function return nothing

addTwoNumbers(20, 40);
addTwoNumbers(20, "40");
addTwoNumbers(20, "aj");
addTwoNumbers(20, null);
//60
// 2040
// 20a

console.log("Again Function call");
function addTwoNumbers2(a, b) {
  //   console.log(a + b); here execute only
  return a + b;
  //   console.log(a + b); // not execute because function retirn the value
}

const results2 = addTwoNumbers2(10, 20);
console.log(results2);

// Again Function call
// 30

console.log("Function Log In User ");

function logInUserMessage(username = "Sam") {
  //   if (username === undefined) {
  if (!username) {
    console.log("Please enter a user name");
    return;
  }
  return `${username} just logged in`;
}

// console.log(logInUserMessage("Shivam"));
// Shivam just logged in

console.log(logInUserMessage(""));
//  just logged in

console.log(logInUserMessage());
// undefined just logged in
