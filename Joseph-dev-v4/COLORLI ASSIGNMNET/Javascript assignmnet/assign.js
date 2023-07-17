


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



// const ints = [1,2,3, "john", 4,5,6,]

// let newInt = []

// for (let i=0; i < ints.length; i++){

//    const current = ints[i];

//   if(typeof current === "string")
//   {
//    continue;
//   }
//   newInt.push(current);
// }

// console.log(newInt, "newint");

// const dateString = new Date();

// console.log(dateString);


// const age = prompt ("What is your age?");

// console.log(age, "age");

// if(age < 18 && age == 17) {

//   alert("You are not eligible to vote");
// }

// else if (age > 18 && age < 50){

//        alert("You are eligible to vote");
// }

// else if ( age > 50 || age >= 100 ) {

//         alert("You are too old");
    
// }

// else {
//    alert("Invalid input")
// }

function getday(dayOfWeek) {

if (dayOfWeek == "Monday" || dayOfWeek == "Thursday" || dayOfWeek == "Wednesday" || dayOfWeek =="Thursday" || 

    dayOfWeek == "Friday" || dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {

   return  (`Today ${dayOfWeek} is a day of the week`);
  }

else {
  return (`Today ${dayOfWeek} is not a day of the week`);
}

}

console.log(getday('Monday'));


// function getday(dayOfWeek) {

// switch (dayOfWeek) {

//   case "Sunday":
//     return ("This is a weekend");

//   case "Monday":
//     return ("This is a weekday");

//   case "Tuesday":
//     return ("This is a weekday");

//   case "Wednesday":
//     return ("This is a weekday");

//   case "Thursday":
//     return ("This is a weekday");

//   case "Friday":
//     return ("This is a weekday");

//   case "Saturday":
//     return ("This is a weekend");

//    default :
//    return ( "This is not a day of the week");
// }


// }

// console.log(getday("man"));

// // Objects

// const person = {
//   firstName: "Ben",
//   lastName: "White",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "mongoDB",
//     "Python",
//     "D3.js"
//   ],
//   isMarried: true
// }

// // console.log(person.firstName, "firstname");
// // console.log(person.lastName, "lastName");
// // console.log(person.age, "age");
// // console.log(person.country, "country");
// // console.log(person.city, "city");

// // console.log(person["skills"][0]);
// // console.log(person["skills"][2]);
// // console.log(person["skills"][3]);
// // console.log(person["skills"][4]);


const person = {

  firstName: "Joe",
  lastName: "Jude",
  fullName: function () {

    return `${this.firstName} ${this.lastName}`;
  },

}

person.friends = ["Eddie", "Kelvin", "Quadri", "Daniel"] ;
person.nationality = "Nigeria" ;
person.firstName = "Joseph" ;

person.age = 25;



person.getAge = function () {

  return `${this.age * 2}`;}

console.log(person.getAge(), "Age");



const copyPerson = Object.assign({}, person);

console.log(copyPerson, "copyPerson");


const keys = Object.keys(person);

console.log(keys, "keys");

const entries = Object.entries(person);

console.log(entries, "entries");


// Day of Week Assignmnet

const dayOfWeek = {
    
  0 : "Today is Sunday",
  1 : "Today is Monday",
  2 : "Today is Tuesday",
  3 : "Today is Wednesday",
  4 : "Today is Thursday",
  5 : "Today is Friday",
  6 : "Today is Saturday"

}


function getValueByKey(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
    return "Invlaid Input";
  }
}


console.log(getValueByKey(dayOfWeek, 2)); 
console.log(getValueByKey(dayOfWeek, 7)); 


// Create an empty set

const products = new Set();

console.log(products, "products");


const list = ["John", "James", "John"];


// add items to a set

const uniqueSetFromList = new Set(list);

// set class work
// use set on the array below

const arr = ["mango", "orange", "mango", "apple", "apple", "carrot"];

// get unique set using set
// get unique array from the unique set

const uniqueSet = new Set(arr);
console.log(uniqueSet);

const uniqueArray = [...uniqueSet];

console.log(uniqueArray, "UniqueArray");

let uniqueArray_2 = [];

  for (const fruit of uniqueSet){
    uniqueArray_2.push(fruit) 

    };

    console.log(uniqueArray_2, "UniqueArray_2");
    

const list2 = ["javascript", "java", "python", "javascript", "java"];
const addData = new Set(list2);

addData.add("app");
addData.add("app2");
addData.add("app3");

console.log(addData, addData.size);



for (let course of addData ){

  if(course.includes("p")){
    
addData.delete(course);
  }
}

console.log(addData, addData.size);


