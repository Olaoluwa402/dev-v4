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

