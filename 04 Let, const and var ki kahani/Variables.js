const accountId = 223033;
let accountEmail = "shivamvats@gmail.com";
var accountPassword = "225533";
accountCity = "Gurgaon";

let accountState;

// accountId = 2250565; // const - constant not change not allowed
// console.log(accountId);
/*
01. Prefer not to use var 
02. because of issues in block scope 
    and functional scope
*/
accountEmail = "Jha@gmail.com";
accountPassword = 255525;
accountCity = "MG Road";

console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]);
