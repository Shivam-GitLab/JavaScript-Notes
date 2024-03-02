// console.log("Hello Arrays");
// Arrays

// const myArr = [0, 1, 2, 3, 4, 5];
const myArr = [0, 1, 2, 3, 4, 5, true, "String S"];
const myHeros = ["Spider Man", "Bat Man"];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[2]);
console.log(myArr[6]);
console.log(myArr[7]);
console.log(myArr2[2]);
/*
2
true
String S
3
*/

// Arrays Method

myArr.push(10);
myArr.push(14);
console.log(myArr);
myArr.pop();
console.log(myArr);
/*
[ 0, 1, 2, 3, 4, 5, true, 'String S', 10, 14 ]
[ 0, 1, 2, 3, 4, 5, true, 'String S', 10 ]
*/

// myArr.unshift(18);
console.log(myArr);
// [ 18, 0, 1, 2, 3, 4, 5, true, 'String S', 10 ]
// myArr.shift();
console.log(myArr);
// unshift value removed , First value removed
// [ 0, 1, 2, 3, 4, 5, true, 'String S', 10 ]

console.log(myArr.includes(9));
console.log(myArr.includes(2));
// false
// true
console.log(myArr.indexOf(10));
console.log(myArr.indexOf(100));
// 7
// -1

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof myArr);
console.log(typeof newArr);
/**
 [ 1, 2, 3, 4, 5, true, 'String S', 10 ]
  1,2,3,4,5,true,String S,10
  object
  string
 */

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // 1 2 index , 3 exclude
console.log(myArr);
console.log(myn1);
/**
      1, 2
 [ 1, 2, 3, 4, 5, true, 'String S', 10 ]
 [ 2, 3 ]
 */
console.log(myn1);
console.log("B ", myArr);

// console.log(myn1);
console.log("C ", myArr);
const myn2 = myArr.splice(1, 3);
// Splice Original Arr Manipulate
console.log(myn2);

// Manipulate :
console.log(myArr);

/*
 [ 1, 2, 3 ] - these value remove
 [ 0, 4, 5, true, 'String S', 10 ]
 */
