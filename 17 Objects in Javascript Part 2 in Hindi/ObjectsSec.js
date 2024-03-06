// const tinderUser = new Object(); // {}
const tinderUser = {};
tinderUser.id = "123Abc";
tinderUser.name = "Shivam Jha";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// { id: '123Abc', name: 'Shivam Jha', isLoggedIn: false }

const regularUser = {
  email: "somesa@gmail.com",
  fullName: {
    userFullname: {
      firstname: "Shivam",
      lastname: " Jha",
    },
  },
};
console.log(regularUser);
/*
{
  email: 'somesa@gmail.com',
  fullName: { userFullname: { firstname: 'Shivam', lastname: ' Jha' } }
}
*/
console.log(regularUser.fullName);
// { userFullname: { firstname: 'Shivam', lastname: ' Jha' } }

console.log(regularUser.fullName.userFullname);
// { firstname: 'Shivam', lastname: ' Jha' }

console.log(regularUser.fullName.userFullname.firstname);
// Shivam

console.log("------------");

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 2: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4);
// obj1 , obj2 , obj4 empty { } me assign ho rha hai
// console.log(obj3);
// { '1': 'a', '2': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Most time use
// Spread operator - ...
const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log(obj3);
// { '1': 'a', '2': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
  {
    id: 1,
    email: "Shivam Jha",
  },
  {
    id: 1,
    email: "Shivam Jha",
  },
  {
    id: 1,
    email: "Shivam Jha",
  },
];

users[1].email;

console.log(tinderUser);
// { id: '123Abc', name: 'Shivam Jha' }

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
/*
[ 'id', 'name' ]
[ '123Abc', 'Shivam Jha' ]
*/

/*
[
  [ 'id', '123Abc' ],
  [ 'name', 'Shivam Jha' ],
  [ 'isLoggedIn', false ]
]
*/

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// true

console.log(tinderUser.hasOwnProperty("isLogged"));
// false
