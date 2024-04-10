const myNum = [1, 2, 3, 4, 5];

// const myTotal = myNum.reduce((acc, currval) => {
//   console.log(`acc is ${acc}, currval is ${currval}`);
//   return acc + currval;
// }, 0);
const myTotal = myNum.reduce((acc, currval) => acc + currval, 0);

console.log(myTotal);

const shoppingCart = [
  { product: "phone", qty: 1, price: 699 },
  { product: "Screen Protector", qty: 1, price: 9.98 },
  { product: "Memory Card", qty: 2, price: 20.99 },
];

const totalShop = shoppingCart.reduce((acc, currval) => {
  return acc + currval.price * currval.qty;
}, 0);

console.log(totalShop);
