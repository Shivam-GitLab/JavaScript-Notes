/* 
const coding = ["C", "Java", "Python", "Ruby"];

const valuesItem = coding.forEach((item) => {
    console.log(item);
  return item;
});

console.log(valuesItem);
*/
/* 
C
Java
Python
Ruby
undefined
*/

const myNums = [2, 4, 6, 8, 10, 12];
// const newNums = myNums.filter((num) => num > 4);
const newNums = myNums.filter((num) => {
  //   num > 4; // This will not work []
  return num > 4; // This will work [ 6, 8, 10, 12 ]
});
console.log(newNums);
// [ 6, 8, 10, 12 ]
/* Output:
[ 6, 8, 10, 12 ]
*/

const numsArr = [2, 4, 6, 8, 10, 12];

const newNumsArr = [];
numsArr.forEach((num) => {
  if (num > 4) {
    newNumsArr.push(num);
  }
});
console.log(newNumsArr);
// [ 6, 8, 10, 12 ]
/* Output:
[ 6, 8, 10, 12 ]
*/


const books = [
  {
    title: "Book1",
    genre: "Fiction",
    rating: 4.5,
    pulish: 2020,
    edition: 2005,
  },
  {
    title: "Book2",
    genre: "Non-Fiction",
    rating: 3.5,
    pulish: 2021,
    edition: 2010,
  },
  {
    title: "Book3",
    genre: "Fiction",
    rating: 4.0,
    pulish: 2022,
    edition: 2015,
  },
  {
    title: "Book4",
    genre: "Non-Fiction",
    rating: 4.5,
    pulish: 2023,
    edition: 2020,
  },
  {
    title: "Book5",
    genre: "Fiction",
    rating: 5.0,
    pulish: 2024,
    edition: 2025,
  },
];

const newBooks = books.filter((bk) => bk.rating > 4.0);
console.log(newBooks);

/* Output:
 JavaScript\FilterMap.js"
[ 6, 8, 10, 12 ]
[ 6, 8, 10, 12 ]
[
  {
    title: 'Book1',
    genre: 'Fiction',
    rating: 4.5,
    pulish: 2020,
    edition: 2005
  },
  {
    title: 'Book4',
    genre: 'Non-Fiction',
    rating: 4.5,
    pulish: 2023,
    edition: 2020
  },
  {
    title: 'Book5',
    genre: 'Fiction',
    rating: 5,
    pulish: 2024,
    edition: 2025
  }
]
*/
