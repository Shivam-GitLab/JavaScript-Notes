function one() {
  const userName = "Shivam";
  function two() {
    const website = "youtube";
    console.log(userName);
  }
  //   console.log(website);

  two();
}

// one();

if (true) {
  const username = "Shivam";
  if (username === "Shivam") {
    const website = " YouTube";
    console.log(username + website);
  }
  //   console.log(website); Error
}

// console.log(username); Error

console.log("Interesting!");

console.log(addone(5));
function addone(num) {
  return num + 1;
}

// addone(5);

// addtwo(5); //
// Hoisting 
const addtwo = function (num) {
  return num + 2;
};

// addtwo(5);
