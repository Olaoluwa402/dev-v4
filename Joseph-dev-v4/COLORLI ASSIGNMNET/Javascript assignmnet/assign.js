


//  const sliceData = [1,3,5,6,8,10,9,70];

//  console.log(sliceData.slice(4,7));

//  console.log(sliceData.slice(0,));

//  console.log(sliceData.slice(7,8));





//  //replace 789 in the data with john and bayo

//  const textData = [3,5,9,7,8,9];



//  const afterCut = textData.splice(3,3,"John", "James", "Bayo");
//  console.log(textData, "newData");
//  console.log(afterCut, "afterCut");

// console.log(textData.push(afterCut), "push");

// console.log(textData, "textData");

// console.log(textData.pop())

// console.log(textData);

// console.log(textData.shift())
// console.log(textData)

// //Resverse data

// //convert to a string and in a reversed order

// const reverseData_1 = [10,11,12,13];
// const reverseData_2 = [1,2,3,4,5];

// const reverseJoin = reverseData_2.concat(reverseData_1);

// const convertToString_1 = reverseJoin.toString();

// console.log(convertToString_1, "convertToString_1")

// console.log(reverseJoin, "reverseJoin");

//  const reverseJoin_1 = reverseJoin.reverse() ;

//  console.log(reverseJoin_1, "reverseJoin_1");

// const convertToString = reverseJoin_1.toString();

// console.log(convertToString, "convertToString");




// // Using switch on Arrays

// function caseInSwitch(val) {
//     let answer = "";

// // Only change code below this line

//   switch(val) { 
//       case 1:
//       answer = "alpha";
//       break;

//       case 2: 
//       answer = "beta";
//       break;

//       case 3:
//       answer = "gamma";
//       break;

//       case 4:
//       answer = "delta";
//       break;
  
//   }
//     // Only change code above this line
//     return answer;
//   }
  
//   console.log(caseInSwitch(4));



//   const num = [4,5,6,7,3,9,10] 

//   for (let i = 0; i < num.length; i++) {

//     console.log(num [i])
    
//   }


//   for (let i = num.length; i >= 0; i--) {
      
//     console.log(num[i])
    
//   }


//   const states = ["oyo", "ondo", "abia", "edo", "kwara"];


// let newArr = [];

// for (let i = 0; i < states.length; i++) {
//   const current = states[i];

//   if (current.startsWith("o")){
//     newArr.push(current);
    
//   }
// }

// console.log(newArr, "newArr");

// let whileLoopData_2 = [
//   {product_title: "title 1", product_price: "$100", product_qty: 1},
//   {product_title: "title 2", product_price: "$200", product_qty: 2},
//   {product_title: "title 3", product_price: "$300", product_qty: 3},
//   {product_title: "title 4", product_price: "$400", product_qty: 4},
//   {product_title: "title 5", product_price: "$500", product_qty: 5}
// ]

// let i = 0;
// let prices = []

// for (let i=0 ; i< whileLoopData_2.length; 1++) {

//   const current = whileLoopData_2[i]
// }


// const number = [1,2,3,4,5];

// do {

// }

// while (i < number.length);

// i = 0;

// do {
//    console.log(i);
//    i++;
// } while (i < number.length);

// console.log(number, "num");



const ints = [1,2,3, "john", 4,5,6,]

let newInt = []

for (let i=0; i < ints.length; i++){

   const current = ints[i];

  if(typeof current === "string")
  {
   continue;
  }
  newInt.push(current);
}

console.log(newInt, "newint");

