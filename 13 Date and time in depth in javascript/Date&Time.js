let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());

console.log(typeof myDate);
// let myCreateDate = new Date(2024, 0, 29);
let myCreateDate = new Date(2024, 0, 29, 5, 3);
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());

// let myNewCreateDate = new Date("2023-01-25");
let myNewCreateDate = new Date("01-14-2024");
console.log(myNewCreateDate.toLocaleString());
console.log(myNewCreateDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
});
