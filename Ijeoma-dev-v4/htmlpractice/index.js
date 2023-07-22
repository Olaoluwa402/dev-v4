// // get the elment
// const menuBar = document.getElementById("menubar");

// // set event listener
// menuBar.addEventListener("click", function () {
//   const navbar = document.getElementById("navbar");
//   navbar.classList.toggle("open");
// });

// var age = prompt("What is your age?");
// // if(!age){

// // }
// // alert("please, input your age!");

// if(age <= 17){
//   alert("You are not legible to vote!");
// }

// if(age >= 18 && age <= 60){
// alert("You are legible to vote!");

// }
// if(age >= 60){
//   alert("you are too old to vote!");
// }

// age = confirm(age);
// function findSum(arr){
// sum = 0;
// for(let i=0; i < arr.length; i++){
//   sum = sum + arr[i];
// }
// return sum;
// }
// console.log(findSum([5,8,18,9,4,2]));

// function findFirst(arr){
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++){

//     // if(arr[i].startsWith("o")){

//     // }
//      if(arr[i].charAt(0).startsWith("o")){
//        console.log(arr[i]);
//        newArr.push(arr[i]);
// }
//      }

// return newArr;
//   }

// console.log(findFirst(["oyo", "ibadan", "ondo", "akure"]));

// // function daysOfTheWeek(days){

// // for(let i=0; i < days.length; i++){

// //   console.log(days[i]);
// //   // var days = prompt("input the day of the week");
// // if(days[i] == "Sunday"){
// //   console.log("Today is Sunday");
// //   alert("Today is Sunday");
// // }
// // else if(days[i] == "Monday"){
// //   console.log("Today is Monday");
// //   alert("Today is Monday");
// // }
// // else if(days[i] == "Tuesday"){
// //   console.log("Today is Tueday");
// // }
// // else if(days[i] == "Wedneday"){
// //   console.log("Today is Wednesday");
// // }
// // else if(days[i] == "Thursday"){
// //   console.log("Today is Thursday");
// // }
// // else if(days[i] == "Friday"){
// //   console.log("Today is Friday");
// // }
// // else if(days[i] == "Saturday"){
// //   console.log("Today is Saturday");
// // }
// // else{
// //   console.log("we have only seven days in a week");
// // }
// // }

// // }
// // console.log(daysOfTheWeek(["Sunday", "Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "SAturday"]));

// // days of the week
// function weekDays(days){
//   switch(days){
// case "monday":
//   return "today is Monday";
//   break;
//   case "tuesday":
//     return "today is Tuesday";
//   break;
//   case "wednesday":
//     return "today is Wednesday";
//     break;
//     case "thursday":
//     console.log("today is Thursday");
//     break;
//     case "friday":
//     console.log("today is Friday");
//     break;
//     case "saturday":
//     console.log("today is Saturday");
//     break;
//     case "sunday":
//     console.log("today is Sunday");
//     break;
//   default:
//     return `${days} is not a day!`;
//   }
// }

// console.log(weekDays("tuesday"));

// const person = {
//   firstName: 'Ben',
//   lastName: 'white',
//   age: 25,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MAngoOB',
//     'Python',
//     'D3.js',
//   ],
//   isMarried: true
// }
// console.log(person["firstName"]);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.country);
// console.log(person.city);
// console.log(person.skills[0]);
// console.log(person.skills[1]);

const person = {
  firstname: "Blessing",
  lastname: "John",
  fullName: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};

person.friends = ["james", "joy"];
person.nationality = "American";
person.firstname = "Vivian";
person.age = 24;
(person.getAge = function () {
  return `${this.age * 2}`;
}),
  console.log(person.getAge(24));

console.log(person);

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);
const entries = Object.entries(person);
console.log(entries);

let weeks = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};
var dayPrompt = prompt("input a day number from zero to six");
let weekKeys = Object.keys(weeks);
for (let i = 0; i < weekKeys.length; i++) {
  if (dayPrompt == weekKeys[i]) {
    console.log(`today is ${weeks[dayPrompt]}`);
    alert(`today is ${weeks[dayPrompt]}`);
  } else {
    console.log("not a valid input");
  }
}

// const { log } = console;
// const emptySet = new Set();

const arr = ["mango", "orange", "mango", "apple", "apple", "carrot"];

const get = new Set(arr);
const getin = [...get];
console.log(getin);
let arra = [];
for (const arr of get) {
  arra.push[arr];
}
arra = [...get];
console.log(arra);

const list = ["javascript", "java", "python", "javascript", "java"];
const addData = new Set(list);
const getData = [...addData];
console.log(addData);
addData.add("app");
addData.add("app2");
addData.add("app3");
console.log(addData, addData.size);

for (let list of addData) {
  if (list.includes("p")) {
    addData.delete(list);
  }
}
console.log(addData);

const uData = [1, 2, 3, 4, 5];
const uData2 = [6, 7, 8, 9];
const uData3 = [...uData, ...uData2];
const data1 = new Set(uData3);
console.log(uData3);

const arr1 = [13, 15, 20, 10];
const arr2 = [9, 13, 10, 14, 17];
const arr3 = [...arr1, ...arr2];
const arrr3 = new Set(arr3);

console.log(arrr3);

// int c = a.filter((num) => b.has(num));
const setInter = new Set(arr2);
let finalArr = [];
for (let i = 0; i < arr1.length; i++) {
  const curr = arr1[i];
  console.log(curr);
  if (setInter.has(curr)) {
    finalArr.push(curr);
  }
}
const finalArrset = new Set(finalArr);
console.log(finalArrset);
console.log(finalArr);

const mapArr = [
  ["Lagos", "Ikeja"],
  ["Oyo", "Ibadan"],
  ["Ekiti", "Ado"],
];

const mapData = new Map(mapArr);

mapData.set("Kwara", "Ilorin");
console.log(mapData);
let myData = [...mapData];
console.log(myData);

const mapData2 = [
  ["JS", 2],
  ["HTML", 10],
  ["CSS", 5],
];

for (let i = 0; i < mapData2.length; i++) {
  myData.push(mapData2[i]);
  console.log(myData);
}

const arr5 = new Map(myData);
console.log(arr5);

/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/

function convert(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
console.log(convert(37), " F");

// 2. Given an integer array nums, move all the even integers
//     at the beginning of the array  followed by all the odd integers.
//     Return any array that satisfies the condition
//     Example:
//     Input: nums = [3,1,2,4]
//     output: [2,4,3,1]
//     Explanation: outputs: [4,2,3,1], [2,4,1,3] and [4,2,1,3]
//     would also be accepted
//  */

let integerNum = [3, 1, 2, 4];

let getit = [];
let getan = [];

for (let i = 0; i < integerNum.length; i++) {
  if (integerNum[i] % 2 == 0) {
    getit.push(integerNum[i]);
  } else {
    getan.push(integerNum[i]);
  }
}
const together = getit.concat(getan);
console.log(getit);
console.log(getan);
console.log(together);

/*
       3. Write a function that takes in integers in minute and convert it to seconds
       Examples:
       convert(5) => 
       300
       convert(3) => 180
   */

function convertMin(min) {
  let convmin = min * 60;
  return convmin;
}
console.log(convertMin(3), "seconds");

/*
       4. Write a function that returns true if a number passed into it is an 
       even number and false if otherwise. 
   */

function check(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check(7));

/* 
       5. Create a function that takes a number as an argument, increments the number by 
       1 and return the result. Example addition(0) => 1, addition(4) => 5
   */

function arg() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
console.log(arg());

//  to check for prime numbers

function isPrime(nume) {
  for (let i = 2; i < nume; i++) {
    if (nume % i == 0) {
      return false;
    } 
    else {
      return true;
      
    }
    // return `${nume} is a prime number`;
  }
  return nume;
}
console.log(isPrime(9));


function mini(...numb){
  return "";
}
console.log(mini(1,4,5,7,5,3,2));

const perimeter = function(radius){

 let circle = Math.ceil(2 * Math.PI * radius);


 return circle;

};
console.log(perimeter(8));

console.log((function(a){
  return 4 * a;
})
(5)
);

// Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".
const reverseString = "hello";
let estring = reverseString.split("");
console.log(estring);
console.log(estring.reverse().toString().replaceAll(",", ""));

// Truncate a string (first argument) if it is longer
// than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.

const str = function(newString, dot){
  let truncate = newString.substring(0, 30);
  return truncate + dot;
}
console.log(str("Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with", "..."));



/*Return the provided string with the first letter of each
 word capitalized. Make sure the rest of the word is in lower case.
 */

 const stri = ["strong", "weak", "happy"];
 for(let i=0; i < stri.length; i++){
  const stringupper = stri[i].charAt(0).toUpperCase();
  const stringlower = stri[i].slice(1).toLowerCase();
console.log(stringupper + stringlower);
 }
 

 /* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
 */

function splitArray(array1){
   const chunkArrayInGroups = array1.splice(0, array1.indexOf("c"));
   const chunkArrayInGroupse = array1.splice(2, array1.indexOf("d"));
return chunkArrayInGroups + chunkArrayInGroupse;
}
console.log(splitArray(["a", "b", "c", "d"]));


