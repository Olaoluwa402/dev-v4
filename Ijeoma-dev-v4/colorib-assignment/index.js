// const navbar = document.getElementById(".navbar");

// // set event listener
// navbar.addEventListener("click", function () {
//   const nav = document.getElementById(".nav");
//   navbar.classList.toggle("open");
// });


let num = [4,5,6,7,3,9,10];
for(let i=0; i < num.length; i++){
  const num_1 = num[i];
  console.log(num_1);
}
// for(let i=num.length; i >0; i--){
//   const num_2 = num[i];
//   console.log(num_2);
// }

// const states = ["oyo", "ondo", "abia", "edo","kwara"];
// for(let i=0; i < states.length; i++){
//   let num_3 = num[i];
//   console.log(num_3);
// if(num_3.startsWith("o")){
// console.log(num_3);

// }

// }


let whileloopData_2 = [
  { product_title: "title 1", product_price: "$100", product_qty: 1},
  { product_title: "title 1", product_price: "$200", product_qty: 1},
  { product_title: "title 1", product_price: "$300", product_qty: 1},
  { product_title: "title 1", product_price: "$400", product_qty: 1},
  { product_title: "title 1", product_price: "$500", product_qty: 1}
];
   
// let data_1 = whileloopData_2[0]["product_price"];
// console.log(data_1);

// let data_2 = whileloopData_2[0].product_price;
// console.log(data_2);

// let data_3 = whileloopData_2[0].product_price;
// console.log(data_3);

// let data_4 = whileloopData_2[0].product_price;
// console.log(data_4);
// let data_5 = whileloopData_2[0].product_price;
// console.log(data_5);





 

for(let i=0; i < whileloopData_2.length; i++){
  let data = whileloopData_2[i];
  console.log(data);
  let data_1 = data["product_price"].replace("$");
console.log(data_1);
}
// to display only the integers.
const ints = [1,2,3,"john",5,6];

for(let i = 0; i < ints.length; i++){
  if(ints.isInteger()){
continue;
}
console.log(ints);
}



/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/

function convert(celsius){
   let fahrenheit = celsius * (9/5) + 32;
   return celsius;
}
console.log(convert(37));  

// 2. Given an integer array nums, move all the even integers
//     at the beginning of the array  followed by all the odd integers.
//     Return any array that satisfies the condition
//     Example:
//     Input: nums = [3,1,2,4]
//     output: [2,4,3,1]
//     Explanation: outputs: [4,2,3,1], [2,4,1,3] and [4,2,1,3]
//     would also be accepted
//  */

/*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */

/*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */

/* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */
