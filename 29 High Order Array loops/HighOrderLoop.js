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
