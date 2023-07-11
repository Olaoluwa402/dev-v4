// loops
// for loop
/*
syntax
for(initialization; condition; increment/decrement){
    // your code goes here
}
*/

const num = [4, 5, 6, 7, 3, 9, 10];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

for (let i = num.length; i >= 0; i--) {
  console.log(num[i]);
}
const states = ["oyo", "ondo", "abia", "edo", "kwara"];

// while loop - loops over a block off code as long as the condition is true
const whileLoopData = [1, 2, 3, 4, 5];

let j = 0; //variable initialiation
let multiple = [];
while (j < whileLoopData.length) {
  const current = whileLoopData[j];
  //   console.log(current * 2);
  multiple.push(current * 2);

  j++;
}

console.log(multiple, "multiple");

let whileLoopData_2 = [
  { product_title: "title 1", product_price: "$200", product_qty: 1 },
  { product_title: "title 2", product_price: "$100", product_qty: 2 },
  { product_title: "title 3", product_price: "$300", product_qty: 3 },
  { product_title: "title 4", product_price: "$400", product_qty: 4 },
  { product_title: "title 5", product_price: "$500", product_qty: 5 },
];

// 1. filter out prices
//2. remove dollar sign
//3. cast to number "500", "300"
//4. push to a new array [500,200,330]
// total everything in the array 1500

let prices = [];
for (let i = 0; i < whileLoopData_2.length; i++) {
  const current = whileLoopData_2[i];
  prices.push(+current.product_price.replace("$", ""));
}

console.log(prices, "prices");
let sum = 0;
for (let p = 0; p < prices.length; p++) {
  const current = prices[p];
  sum += current; //sum = sum + current
}

console.log(sum, "sum");

const ints = [1, 2, 3, "john", 5, 6, 7, 8, 10];
const numOnly = [];
for (let p = 0; p < ints.length; p++) {
  const current = ints[p];
  if (typeof current === "string") {
    continue;
  }

  numOnly.push(current);
}

console.log(numOnly, "numOnly");
