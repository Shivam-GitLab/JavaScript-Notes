// Objects & events are imoportant

// sigleton
// Object.create

// object literals

const mySym = Symbol("Key1");

const JsUser = {
  name: "Shivam",
  "full name": "Shivam Jha",
  mySym: "mykey1", // type String
  [mySym]: "mykey1", // type symbol
  age: 19,
  rollNo: 33,
  location: "Delhi",
  email: "saitmshivam@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Sunday", "Monday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
/*
saitmshivam@gmail.com
saitmshivam@gmail.com
Shivam Jha
*/
console.log(JsUser.mySym);
console.log(typeof JsUser[mySym]);
/*
mykey1
string
*/

JsUser.email = "shivamsaitm@gmail.com";
// Object.freeze(JsUser); // dont change freeze the value
JsUser.email = "shisaitm@gmail.com";
console.log(JsUser.email);

console.log(JsUser);
/*
{
  name: 'Shivam',
  'full name': 'Shivam Jha',
  mySym: 'mykey1',
  age: 19,
  rollNo: 33,
  location: 'Delhi',
  email: 'shivamsaitm@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Sunday', 'Monday' ],
  [Symbol(Key1)]: 'mykey1'   - []
}
*/

JsUser.greeting = function () {
  console.log("Hello Js User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello Js User Sec, ${this.name}`);
};

console.log(JsUser.greeting()); // undefined

console.log(JsUser.greeting);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
