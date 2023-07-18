// Assignmnet 1
const { log } = console;

function convertToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;

  return fahrenheit;
}

log(convertToFahrenheit(35), "Celsius");

// Assignmnet 2

const num = [3, 2, 4, 6, 8, 9];
let finalResult = [];
for (let i = 0; i < num.length; i++) {
  const curr = num[i];
  if (curr % 2 === 0) {
    finalResult.unshift(curr);
  } else {
    finalResult.push(curr);
  }
}

log(finalResult, "Result");

//Assignmnet 3

function Convert(minutes) {
  return minutes * 60;
}

log(Convert(5), "Minutes1");
log(Convert(3), "Minutes2");

// Assignmnet 4

function checkNum(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

log(checkNum(5));
log(checkNum(4));

// Assignmnet 5

function increment(numb) {
  const result = numb + 1;

  return result;
}

log(increment(0));
log(increment(7));

// Assignment 6

const givenString = "Hello";

let finalReverse = "";

for (let i = givenString.length - 1; i >= 0; i--) {
  curr = givenString[i];

  //  log(curr, "Current");

  finalReverse = finalReverse + curr;
}

log(finalReverse, "Final");

// Assignment 7

const str_1 = "This is the beginning of a great journey into Javascript";
const str_2 = "Life of a programmer";
const str_3 = "We are good";

const truncate = function (str, len) {
  if (str.length > len) {
    if (str.length <= 10) {
      return str.slice(0, str.len) + "...";
    } else {
      return str.slice(0, len) + "...";
    }
  } else {
    return str;
  }
};

log(truncate(str_1, 17), "Truncate");
log(truncate(str_2, 17), "truncate2");
log(truncate(str_3, 17), "truncate3");

// const myArray = [];

// // Only change code below this line

// for (let k = 1; k < 10; k += 2){

//   myArray.push(k);
// }

// for(let j = 9; j > 0; j -= 2){

//     myArray.push(j);
// }
// log(myArray, "myArray");

// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;

// for(let i = 0; i < myArr.length; i++){

//   total = total + (myArr[i]);
// }

// log(total, "total");

// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//     for(let i = 0; i < arr.length; i++){
//       for(let j = 0; j < arr[i].length; j++){
//         product = product * (arr[i][j]);
//       }
//     }
//     // Only change code above this line
//     return product;
//   }

//   log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]), "Multiply");

//   function sum(arr, n) {
//     // Only change code below this line
//      if(n <= 0) {
//        return 0;
//   }
//   else {
//     return sum(arr, n  - 1) + arr[n - 1];
//   }
//     // Only change code above this line
//   }

//   log(sum([2,3,4,5,6], 3), "Sum");

//   const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];

//   function lookUpProfile(name, prop) {
//     // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//       if (contacts[i].firstName === name) {
//         if (contacts[i].hasOwnProperty(prop)) {
//           return contacts[i][prop];
//         } else {
//           return "No such property";
//         }
//       }
//     }
//     return "No such contact"
//   }

//   log(lookUpProfile("Akira", "likes"), "Lookup");

//   const numbr = Math.floor(Math.random() * 11);

//   log(numbr, "numbr");

//   log(Math.abs(-5), "ABS");

//   let language = "Javascript";

//   log(language.substr(4,6));

//   let country = "Nigeria Ghana Togo";

//   log(country.split(" "));

//   let string = "Learn new Javascript, the new and effective way new"

//   log(string.match("Javascript"));
//   log(string.match(/new/gi));

//   function convertToInteger(str, radix) {
//    return parseInt(str, radix);
//   }

//   log(convertToInteger("10011", 2));

//   function rangeOfNumbers(startNum, endNum) {

//     if (startNum === endNum){
//        return [startNum];
//     }

//     else {

//     let  finalRange = rangeOfNumbers(startNum, endNum -1);
//       finalRange.push(endNum);
//     return finalRange;

//     }
//   };

//   log(rangeOfNumbers(1,5));

//   const perimeterOfCircle = function(radius){

//     const PI = Math.PI;

//     return Math.ceil(2 * (PI) * radius);

//   }

//   const result = perimeterOfCircle;

//   log(result);

//   log(perimeterOfCircle(2.2));

//   log((function(s){

//     return 4 * s;

//   })(5));
