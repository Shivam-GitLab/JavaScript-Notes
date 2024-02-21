console.log("Number & Math");

const score = 400;

const balance = new Number(100);
// console.log(balance);

// console.log(score);

// console.log(balance.toString()); // 100 - count
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2).length); // 3

// const otherNumber = 23.8966; // 23.9
// const otherNumber = 123.8966; // 124
const otherNumber = 1123.8966; // 1.12e+3

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);

// ************** Maths ************

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-588)); // 588
console.log(Math.round(4555.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.sqrt(81));

console.log(Math.min(4, 3, 211, 1, 0));
console.log(Math.max(4, 3, 211, 1, 0));

console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
