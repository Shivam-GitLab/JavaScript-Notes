/* 24 Immediately Invoked Function Expressions IIFE */

/* Named IIFE */
(function chai() {
  console.log(`DB Connected 1`);
})();
// DB Connected
// chai();

/* Global Scope Ke Polution ke karan IIFE Use krte hai */
// (() => {
//   console.log(`DB Connected 2`);
// })();

/* Un Named IIFE */
((name) => {
  console.log(`DB Connected 2 ${name}`);
})("Sam");
// DB Connected 2 Sam
