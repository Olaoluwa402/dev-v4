// strings - are text btw single, diuble and backticks quotes
const str1 = "John";
const str2 = `I am ${str1}`;

console.log(str2, "st2");

// string methods

// 1. concatenation - string addition
const concat_1 = "john" + "Bimpe"; //johnBimpe
const concat_2 = 47 + "John"; //47john
const concat_3 = 100 + "200"; // 100200
const concat_4 = 100 + Number("200");

console.log(concat_1, concat_2, concat_3, concat_4, "string addito");

// escape characters
//const esk = "He said, \"Javascript is fun\" "

const newLine = "this is \n\tJavacript mastery";
console.log(newLine, "newLine");

// string methods

const countries = ["Nigeria", "Ghana", "Togo", "Spain", 15];
const final = [];
countries.forEach((country) => {
  console.log(typeof country === "string");
  if (typeof country === "string" && country.length > 4) {
    final.push(country);
  }
});

console.log(final, "final");

// const access characters in strings
let js = "javasCRIPt";

console.log(js[0]); //J

const firstChar = js[0].toUpperCase(); // Capital letter
const restChar = js.slice(1).toLowerCase(); // return loercase

const capitalized = firstChar + restChar;

console.log(capitalized, "capitalized");
