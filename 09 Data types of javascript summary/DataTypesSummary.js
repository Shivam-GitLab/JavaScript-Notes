// # Primitive - 7  [ Copy Send ]
/*

 * 01 String
 * 02 Number
 * 03 Boolean
 * 04 Null ( Empty )
 * 05 Undefined
 * 06 Symbol ( For any value unique )
 * 07 BigInt
 
 */

// const score = 100;
// const scoreValue = 100.03;
// console.log(score);
// console.log(scoreValue);

// const isLoggedIn = true;
const outsideTemp = null;
// let userEmail; // undefined
// console.log(userEmail);

const id = Symbol("223033");
const anotherId = Symbol("223033");
console.log(id === anotherId);
// const bigNumber = 2212191539155555551556n;
// console.log(bigNumber);
console.log(typeof bigNumbers); // undefined

// # Non Primitive ( Referefnce Type ) [ Actual data Send ]

/*

 * 01 Arrays
 * 02 Functions
 * 03 Objects
 
 */

const car = ["BMW", "THAR", "SAFARI", "WAGNAR"];
// console.log(car);

let myObject = {
  name: "Shivam",
  age: 22,
};

console.log(myObject);

const myFunction = function () {
  console.log("Hello World");
};

console.log(myFunction);

console.log(typeof myFunction);
// console.log();

console.log(typeof bigNumbers);
console.log(typeof outsideTemp);
