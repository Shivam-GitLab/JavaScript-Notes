/**
 * Memory Type :
 * 01 Stack [ Primitive type ] - Copy
 * 02 Heap [ Non Primitive type ] - Reference
 */

let myYouTubeName = "Shivam Vats";

let anotherName = myYouTubeName; // Copy Milta hai
anotherName = "Shivam Jha";
console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
  email: "shivamusa@gmail.com",
  upi: "8579900867@paytm",
};

let userTwo = userOne; // Reference Original

userTwo.email = "shivam@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
