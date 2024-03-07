// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" >= 1);
console.log(" Hello ");
console.log(null > 0);
console.log(null == 0);
console.log(null == undefined);
console.log(null <= 0);
console.log(null >= 0);

/*
console.log(null > 0); - This is asking, "Is nothing (null) more than zero?" The answer is no, so it prints false.

console.log(null == 0); - This is asking, "Is nothing (null) the same as zero?" In JavaScript, null and 0 are not considered the same, so it prints false.

console.log(null == undefined); - This is asking, "Is nothing (null) the same as undefined?" In JavaScript, null and undefined are considered loosely equal, so it prints true.

console.log(null <= 0); - This is asking, "Is nothing (null) less than or equal to zero?" In JavaScript, null is considered equal to zero in this context, so it prints true.

console.log(null >= 0); - This is asking, "Is nothing (null) more than or equal to zero?" Again, in JavaScript, null is considered equal to zero in this context, so it prints true.
*/

/*
false
false
true
true
true
*/

// Avoid These type cinversion

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// === strict check
console.log("strict");
console.log("2" == 2); // true
console.log("2" === 2); // false because check data type
