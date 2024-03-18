// if

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("True");
}

if (2 == "2") {
  console.log("executed 1");
}

if (2 === "2") {
  console.log("executed 2");
}

if (2 === 2) {
  console.log("executed 3");
}
// Comparison Operator
// < , > , <= , >= , == , != , === ,!==

const tempreture = 41;
// if (tempreture < 50) {
if (tempreture === 41) {
  console.log("less than 50");
} else {
  console.log("tempreture is greater than 50");
}

// less than 50
// tempreture is greater than 50

const score = 260;
if (score > 100) {
  const power = "fly";
  console.log(`User Power : ${power}`);
}

// User Power : fly
// error - power is not defined
// console.log(`User Power : ${power}`);

const balance = 1000;
// if (balance > 500) console.log("test");

// Best Way
// if (balance > 500) {
//   console.log("test");
// }

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("Less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const logggedInFromGoogle = false;
const logggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy courses");
}

if (logggedInFromGoogle || logggedInFromEmail) {
  console.log("User Logged In");
}
