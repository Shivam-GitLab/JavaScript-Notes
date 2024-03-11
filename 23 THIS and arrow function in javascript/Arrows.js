const user = {
  username: "Sam1",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to the website`);
    console.log(this);
  },
};
/*
Sam1 welcome to the website
{
  username: 'Sam1',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Sam2 welcome to the website
{
  username: 'Sam2',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
// user.welcomeMessage();
// user.username = "Sam2";
// user.welcomeMessage();

// Sam1 jjjwelcome to the website
// Sam2 welcome to the website

// console.log(this);
// {}jjjj

// function chai() {
//   let username = "Shivam";
//   console.log(this.username);
//   // this only use in object
// }

// chai();
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  navigator: [Getter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/

// const chai = function () {
//   let username = "Shivam";
//   console.log(this.username);
// };

// chai();
// undefined

const chai = () => {
  let username = "Shivam";
  console.log(this);
};

// chai();
// {}
// undefined

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({
  username: "Sam",
});

console.log(addTwo(3, 4));
/*
{ } - return dena padega
( ) - return nahi dena padega
*/

// undefined
// { username: 'Sam' }

// const myArr = [2, 5, 7, 8, 9];

// array.forEach(() => {

// });
