const marvel_heros = ["thor", "ironnman", "Spider Man"];
const dc_heros = ["Super Man", "flash", "Bat Man"];

// marvel_heros.push(dc_heros);
console.log("Push - ");
console.log(marvel_heros);

// console.log(marvel_heros[3]);
// console.log(marvel_heros[2]);
// console.log(marvel_heros[3][2]);
/**
Consider 3rd index [ 'Super Man', 'flash', 'Bat Man' ] All Push Arrays
Spider Man
Bat Man - console.log(marvel_heros[3][2]);
 */

// console.log("Hello Arrays");

// const all_Heros = marvel_heros.concat(dc_heros);
// console.log("Concat - ");
// console.log(all_Heros);
/*
Return new Array - 
[ 'thor', 'ironnman', 'Spider Man', 'Super Man', 'flash', 'Bat Man' ]

*/
// Spread  Operator - Add more arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]];

console.log(another_array[3]);
console.log(another_array[5]);
console.log(another_array[5][1]);
/**
 [ 4, 5, 6 ]
[ 8, 9, 10 ]
 9
 */

let my_another_array = another_array.flat(Infinity);

console.log(my_another_array);
/**
 [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
 */

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "Hitesh" }));
// interesting
// []
/*
false
[ 'H', 'i', 't', 'e', 's', 'h' ]
*/

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]
