// for of

// ["","",""]
// [{},{},{}]

// const arr = ["1", "2", "3"];
const arr = [10, 20, 30, 40];

for (const i of arr) {
  console.log(i);
}
/* Output:
10
20
30
40
*/

/* Output:
1
2
3
*/

const greetings = "Hello World";

for (const greet of greetings) {
  console.log(`Each letter is ${greet}`);
}

/* Output:
Each letter is H
Each letter is e
Each letter is l
Each letter is l
Each letter is o
Each letter is
Each letter is W
Each letter is o
Each letter is r
Each letter is l
Each letter is d
*/

console.log("=====================================");
// Maps

const myMap = new Map();
myMap.set("India", "New Delhi");
myMap.set("USA", "Washington DC");
myMap.set("UK", "London");
myMap.set("Australia", "Canberra");
// myMap.set("Australia", "Canberra");
/* Only Contain Unique Keys */
/* Output:
Map(4) {
  'India' => 'New Delhi',
  'USA' => 'Washington DC',
  'UK' => 'London',
  'Australia' => 'Canberra'
}
*/

console.log(myMap);
console.log("=====================================");
for (const country of myMap) {
  console.log(country);
}

/* Output:
[ 'India', 'New Delhi' ]
[ 'USA', 'Washington DC' ]
[ 'UK', 'London' ]
[ 'Australia', 'Canberra' ]
*/

console.log("=====================================");
for (const [Key, Value] of myMap) {
  console.log(`The Capital of ${Key} is ${Value}`);
}
/* Object Destructuring */
/* Output:
The Capital of India is New Delhi
The Capital of USA is Washington DC
The Capital of UK is London
The Capital of Australia is Canberra
*/

console.log("=====================================");

const myObj = {
  India: "New Delhi",
  USA: "Washington DC",
  UK: "London",
};

// for (const [Key, Value] of Object.entries(myObj)) {
//   console.log(`The Capital of ${Key} is ${Value}`);
// }

// 13:49

// Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

console.log("=====================================");
const myObjects = {
  India: "New Delhi",
  USA: "Washington DC",
  UK: "London",
};

for (const key in myObjects) {
  // console.log(key);
  console.log(`${key} => ${myObjects[key]}`);
}
/* Output:
India => New Delhi
USA => Washington DC
UK => London
*/
console.log("=====================================");

const myArray = [10, 20, 30, 40, 50];
for (const key in myArray) {
  // console.log(key);
  // console.log(myArray[key]);
  console.log(`Key is ${key} and Value is ${myArray[key]}`);
}
/* Output:
Key is 0 and Value is 10
Key is 1 and Value is 20
Key is 2 and Value is 30
Key is 3 and Value is 40
Key is 4 and Value is 50
*/

console.log("=====================================");

const map = new Map();
map.set("India", "New Delhi");
map.set("USA", "Washington DC");
map.set("UK", "London");
map.set("Australia", "Canberra");

for (const key in map) {
  console.log(key);
}

/* Output: No Output  Because map is not iterable */
console.log("=====================================");

// For Each Loop
const coding = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];

coding.forEach(function (item) {
  console.log(item);
});

/* Output:
HTML
CSS
JavaScript
React
NodeJS
*/
console.log("=====================================");

coding.forEach((item) => {
  console.log(item);
});

/* Output:
HTML
CSS
JavaScript
React
NodeJS
*/

console.log("=====================================");
function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

/* Output:
HTML
CSS
JavaScript
React
NodeJS
*/

console.log("=====================================");
// Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

const myCoding = [
  { name: "HTML", completed: true },
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "React", completed: false },
  { name: "NodeJS", completed: false },
];

myCoding.forEach((item) => {
  console.log(item.name);
});
/* Output:
HTML
CSS
JavaScript
React
NodeJS
*/

console.log("=====================================");
