const name = "Shivam Jha";
const repoCount = 50;

// Outdated
console.log(name + repoCount); // Shivam Jha50
console.log(name + repoCount + 789); // Shivam Jha50789

// Now a days ` ` use back ticks
// String Inter Polation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Shivam-Jha");

console.log(gameName[0]); // S
console.log(gameName[7]); // J
console.log(gameName[20]); // undefind out of length

console.log(gameName.__proto__); // {}

console.log(gameName.length);

console.log(gameName.toLocaleLowerCase()); // shivam jha     Copy Send
console.log(gameName);

console.log(gameName.charAt(8)); // index value send -  index no according

console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, -2);

console.log(anotherString);

const newStringOne = "    Shivam      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivamvats.me/shivam%20jha";
console.log(url.replace("%20", "-"));
console.log(url.includes("shivam")); // true;

console.log(url.includes("shivammm")); // false;

console.log(gameName.split("-"));

const sam = "Shivam";
// sam[0] = "J";
console.log(sam);
console.log("Helooo".at(5));

console.log("Shivam ".repeat(3));
