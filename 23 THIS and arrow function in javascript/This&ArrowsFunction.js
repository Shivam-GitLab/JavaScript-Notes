const user = {
  username: "Shivam",
  price: 100,

  /* this is use for current context */
  welcomeMessage: function () {
    console.log(`${this.username} , Welcome to Channel`);
    console.log(this);
  },
};

// user.welcomeMessage();
/* Shivam , Welcome to Channel */

/* Context  Change */

// user.username = "Sam";
// user.welcomeMessage();

/* Sam , Welcome to Channel */

// console.log(this);
/* Current Context is EMpty {} */

/* In Browswer  Gloobal Object is  Window */
// console.log(this); When  Exxecute this scode

function chai() {
  let username = "Sam";
  console.log(this.username); // undefined
}

/* In Function Don't use this ok
only use in object */
// chai();

// const chaii = function () {
//   let username = "Sam";
//   console.log(this.username);
// };
// chaii(); // undefined
const chaii = () => {
  let username = "Sam";
  console.log(this); // {} if this.username - undefined
};

// chaii(); // undefined

/* Arrow Function Basic Syntax */
// 1.
() => {};

// 2.

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 4)); // 7

/* Implicit Return Not use  Curli braces {} */
// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(3, 4)); // 7

// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3, 4)); // 7

/* if {} curli brases use then use return  */
/* if () parenthesis use then not use return  */

// Object Return

/*  Not object return in this way 
const addTwo = (num1, num2) => {
  username: "Sam";
}; 
*/
// console.log(addTwo(3, 4)); // undefined

/* Object return using parenthesis wrap */
const addTwo = (num1, num2) => ({
  username: "Sam",
});

console.log(addTwo(3, 4));
/* { username: 'Sam' } */

// const myArr = [1, 2, 5, 78, 12];

// myArr.forEach(function () => {});

/* 
Arrow functions and regular functions in JavaScript have several key differences:

this keyword: In a regular function, this refers to the object that called the function. 
In an arrow function, this refers to the context in which the function was defined. In your code, this inside the arrow function chaii does not refer to chaii but to the global context (or the enclosing context if it was defined inside another function or object).

Arguments object: Regular functions have an arguments object, which is an array-like object that contains all the arguments passed to the function.
 Arrow functions do not have an arguments object. If you need to use arguments in an arrow function, you can use rest parameters instead.

Constructor: Regular functions can be used as constructors to create new objects with the new keyword. Arrow functions cannot be used as constructors and will throw an error if used with new.

Implicit return: Arrow functions allow for implicit return values, meaning if the function body is a single expression, it will be automatically returned without needing the return keyword.
 Regular functions require the return keyword to return a value.



// Regular function
function regularFunction() {
  console.log(this);
  console.log(arguments);
}
regularFunction(1, 2, 3); // logs: global object, { '0': 1, '1': 2, '2': 3 }

// Arrow function
const arrowFunction = () => {
  console.log(this);
  console.log(arguments); // Will throw an error
}
arrowFunction(1, 2, 3); // logs: context where arrowFunction was defined, error

*/
