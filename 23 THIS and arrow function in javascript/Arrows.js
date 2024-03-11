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

console.log(this);
// {}jjjj

function chai() {
  console.log(this);
}

chai();
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
