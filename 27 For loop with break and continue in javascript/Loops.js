// for

let array = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < array.length; i++) {
  const element = i;
  // console.log(element);
  if (element == 5) {
    console.log("5 is a best number");
  }
  console.log(array[i]);
}

// console.log(element); // not accessible outside the loop

console.log("====================================");

for (let i = 0; i < 10; i++) {
  console.log(`Outer loop Value : ${i}`);
  for (let j = 0; j < 10; j++) {
    // console.log(`Inner loop Value : ${j} and inner loop Value : ${i}`);
    console.log(i + " * " + j + " = " + i * j);
  }
}
console.log("====================================");
let myArray = [10, 20, 30, 40, 50];

console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

console.log("====================================");

// break and continue

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    // break;
    continue;
  }
  console.log(`Value of i is : ${i}`);
}

console.log("====================================");
console.log("====================================");

console.log("");