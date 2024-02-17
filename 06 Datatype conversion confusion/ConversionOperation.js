let score = "33";
// let score = "33abh"; // NaN - Not A Number
// let score = null; // 0
// let score = undefined; // NaN
// let score = false; // t - 0 f - 0

// "33" => 33;
// "33abc" => NaN ;
// true => 1 , false => 0;

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// boolean try conversion
// let isLoggedIn = "Shivam";

// 1 => true; , 0 => false
// "" => false;
// "Shivam" => true;

let isLoggedIn = " "; // empty - false

let booleanIsloggedIn = Boolean(isLoggedIn);

console.log(booleanIsloggedIn);

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
