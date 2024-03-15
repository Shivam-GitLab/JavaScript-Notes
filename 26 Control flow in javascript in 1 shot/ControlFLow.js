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
