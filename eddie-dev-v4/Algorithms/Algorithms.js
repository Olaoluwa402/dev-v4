// write a function to convert celcius to fareheit scale.
function celciusToFarenheit(param) {
  let result = (9 / 5) * param + 32;
  return Math.ceil(result);
}
console.log(celciusToFarenheit(0));

// write a function to reverse a string.
function reverseString(str) {
  str = str.split("").reverse().join(""); // using split, join and rever
  console.log(`The reversed String is: ${str}`);
}
reverseString("olleh");

// write a function to truncate a string.
function truncateStr(string, maxLen) {
  if (string.length <= maxLen) {
    return string;
  } else {
    return string.substring(0, maxLen) + "...";
  }
}
console.group(truncateStr("Life is beautiful.so enjoy life", 20));

// write a function to capitalise the first letter of a string.
function capFirstLetter(word) {
  word = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return word;
}
console.log(capFirstLetter("momentum"));

// write a function that splits an array and returns a 2 dimensional array.
let arr = ["apple", "banana", "orange", "cheese"];

const vvr = arr.slice(0, arr.length / 2);

function twoArr(arr) {
  let dim1Arr;
  let dim2Arr;
  const newArr = [];

  dim1Arr = arr.slice(0, arr.length / 2);
  newArr.push(dim1Arr);

  dim2Arr = arr.slice(arr.length / 2, arr.length);
  newArr.push(dim2Arr);

  return newArr;
}

console.log (twoArr(arr))


// // write a function that increment  by 5 after every seconds
// function callback(){
//     setInterval(() => console.log('hello'),  3 * 60);
//     setInterval(() => console.log('hello javascript'), 3 * 60);
// }
// callback()


// // find the sum of an array and multiply each item by 2
//  const ijay = [1,2,3,4,5];
// let sum = 0;
//  ijay.forEach((ijay) => console.log(sum = sum + ijay*2));
    
// filter
// perform a search through the full book list using the book titl and author field and return the search result.

const books = [
    {title:"lord of the rings", author:"ay", isbn:1, price:"$200",qty:2},
    {title:"Game of thrones", author:"ay", isbn:2, price:"$300",qty:5},
    {title:"Wonder", author:"Johnson", isbn:3, price:"$250",qty:4},
    {title:"Men in Black", author:"Black", isbn:4, price:"$400",qty:3},
    {title:"Kweku the traveller", author:"James", isbn:5, price:"$500",qty:1},
];

// use map function to select prices for the books.
prices=books.map(({price})=> parseFloat(price.replace("$","")));
console.log("Prices:",prices );

// use map.reduce to sum up the prices

const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
console.log(`Total Price:${totalPrice}`);

// using every fucntion.

const isPricesNumber = prices.every((prices) => typeof prices === "number");
console.log(isPricesNumber)

// write a function to find a book in books

function findBook(books, isbn){
  const request = books.find((books) =>books.isbn === isbn);
}
console.log(findBook(books, 4))

// write a function to return books with price greater than $250

function bookPrice (books, price){
  const answer = books.filter ((prices)=>parseInt(prices.price.replace(`$`, ` `))>price );
  return answer;
}
console.log(bookPrice(books, 250))


function bookQty (books, quantity){
  const answer = books.filter ((quant) => quant["qty"] > quantity );
  return answer;
}
console.log(bookQty(books, 2));

// write a fucntion to update the price by searching with isbn and updating its value

function updatedPrice(books, prices){
  const indexNumber = books.findIndex((book)=> book.isbn === 3);
  books[indexNumber].price = `$${prices}`;
  return books;
}
console.log(updatedPrice(books, 800))

// write a function sorting the prices in descending order.
function sortBooks (books){
  const answer = books.sort ((a, b)=>parseInt(b.price.replace(`$`, ` `))-parseInt(a.price.replace(`$`, ` `)));
  return answer;
}
console.log(sortBooks(books))

// destructuring of an array
const Array = [
  2, "john",[3, 4, 5], {name:"john", age:20}, 15, "bola", null
];
let [p1, p2, p3, p4]= Array;
console.log(p1, p2, p3, p4)

// spread operator in array destructuring
let [, , ...rest] = Array;
console.log(rest, "rest")

let arr2 = ["cashew", "password", "orange", "mango", "banana", "apple"];
let [ a1, ,...data]= arr2
data.unshift(a1)
console.log(data)


// destructure the data below
const continent = [
  {
    africa:[
      [`lagos`,`ikeja`],
      [`oyo`, `ibadan`],
      [`kwara`, `ilorin,`]
    ]
  }
]



// create a user object with the following keys.
// set a value of your choice to each key- username, email, firends, token
// store the created user in local storage
// log your result in console



//  test that a string is present in the given data and print true or false

const givenData = "hacking is the act of identifying and then exploring weaknesses in a compiuter system or network,usually";


function testRegex(string, keyword){
const givenstr = /string/gi.test(givenData)
if (givenstr){
  return true
}
else{return false
}
} 
console.log(testRegex())

// create a student class having a constructor function 
class Students{
  constructor(firstName,lastName,age,email,course){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.course = course;
}
getFullName(){
  const fullName = this.firstName + " " + this.lastName + " " + this.age + this.email + " " + this.course;
  return fullName;
}

}
const student1 = new Students("john", "snow", 45, "jonsnow@gmail.com", ["javascript","css", "php"]);
console.log(student1)


const student2 = new Students("ben", "green", 38 , "bg@yahoo.com", ["java", "c++", "nodejs"]);

console.log(student2.getFullName());



// write a parent class named Bird. include the following fields numLegs, numEyes,Kingdom,sound
// create a child class caled eagles. include the following fields, name,age, 
// let the eagle class extend the bird class
// create tw eagle object from the child class


class Bird{
  constructor(numLegs,numEyes,kingdom,sound){
    this.numLegs = numLegs;
    this.numEyes = numEyes;
    this.kingdom = kingdom;
    this.sound = sound;
  }
}
  class Eagle extends Bird{
    constructor(){

  }
}
