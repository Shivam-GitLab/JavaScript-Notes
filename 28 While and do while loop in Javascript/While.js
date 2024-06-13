// While loop
let i = 1;
while (i < 10) {
  console.log(`Value of index is ${i}`);
  i *= 2;
}

/* Output:
Value of index is 1
Value of index is 2
Value of index is 4
Value of index is 8
*/

// while (2 == 2) {
//   console.log("True");
// }
console.log("Done");
let myArr = ["Sam", "Shivam", "Rohan", "Sohan", "Rahul"];
let idx = 0;

while (idx < myArr.length) {
  console.log(`Name is ${myArr[idx]}`);
  idx++;
}
/* 
Name is Sam
Name is Shivam
Name is Rohan
Name is Sohan
Name is Rahul
*/

// Do while loop

let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score < 5);

/* Output:
Score is 1
Score is 2
Score is 3
Score is 4
*/

console.log("Done");
do {
  console.log("Hello");
} while (2 == 3);
/* 2 is not equal to 3 
but output will be Hello
do while loop will run atleast once 
time if condition is true or false
*/

/* In this loop first of all work done
and then condition check */
