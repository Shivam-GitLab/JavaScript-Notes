const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((item) => item + 10);
const newNums = myNums.map((item) => {
  //    item + 10; Error: This will not work
  return item + 10;
});

console.log(newNums);
/* Output:
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/
/* 
[ undefined, undefined, undefined, undefined, undefined,
  undefined, undefined, undefined, undefined, undefined ]
*/
/* Output:
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

const myNumss = [1, 2, 3, 4, 5];

const newNumss = myNumss
  .map((num) => num * 10)
  .map((num) => num * 10)
  .filter((num) => num > 300);

console.log(newNumss);

// [ 10, 20, 30, 40, 50 ]
// [ 100, 200, 300, 400, 500 ]
// [ 400, 500 ]

console.log("Hello");