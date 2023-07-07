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

let name = "justinalo";
let anw = name[name.length - 1]; //
console.log(anw, "aws");

// toUpperCase() // python
let eddy = "python";
let Ijeoma = eddy.toUpperCase();
console.log(Ijeoma);

//toLowerCase
let dataToLowerCase = "JAVA";
console.log(dataToLowerCase.toLowerCase(), "dataToLowerCase");

// substr - takes two arguments, the first being the startIndex and the laste the num of chracters to be sliced

let user = "arguments";

//task is, "get ments out off the string given"
console.log(user.substr(4, 5));

function userChoice(user, index, numChar) {
  return user.substr(index, numChar);
}

const result = userChoice("javascript", 3, 5);
console.log(result, "result");

// get type from typescript using substr
const stephen = "typescript";
console.log(stephen.substr(0, 4));

// substring - accepts startIndex and stop index
// get type from typescript using substring //

let myType = "typescript";

console.log(myType.substring(0, 4));

//spit - used to conver a string to an array
let greet = "Hello";
let greet_2 = "Javscript is fun";
let greet_3 = "Python, javascript, HTML"; //split at ", "
let greet_4 = "python%javascript%CSS";
let case_1 = greet.split(); //no augument passed // ["Hello"]
let case_2 = greet.split(""); // empty string //["H","e","l","l","o"]
let case_3 = greet_2.split(" "); // split at space characters //["Python","javascript","HTML"]
//(Hello) => olleH;
let case_4 = greet_3.split(", ");
let case_5 = greet_4.split("%");

console.log(case_1, case_2, case_3);

console.log(case_4);
console.log(case_5);

//reverse hello

//1. loop through the Hello string to have access to each characters in Hello
let finalReverse = "";
for (let i = greet.length - 1; i >= 0; i--) {
  console.log(greet[i], "khk");
  finalReverse = finalReverse + greet[i];
}

//using split

let splittedData = greet.split("");
console.log(splittedData.reverse().join().replace(/,/g, ""));

console.log(finalReverse, "finaReverse");

// trim - removes trailing spaces at the beginning and end of a string
let input = "      John";
console.log(input);
console.log("------------------------");
let datatrimmed = input.trim();
console.log(datatrimmed);

//includes -

let states = "ondo Ekiti oyo kwara delta";
console.log(states.includes("Delta"), "states");
if (states.includes("Delta")) {
  console.log("delta is present");
}

// replace - takes the substring to be replaced as the first argument and the new substring as the second argument
const rData = "Javascript is simple, yes, very simple"; // replace basic ith tough
const nReplaced = rData.replace(/simple/g, "tough");
console.log(nReplaced, "replaced");

// charAt - takes in the index and returns the value sitting on thta index
const countries_2 = ["Nigeria", "Algeria", "Togo", "mali", "Spain", "Gabon"]; //get countries with name ending letter a

function countriesWithSameLastChar(arr, charEnding) {
  //1. loop over the country list to have access to each country
  //2. find the character at the last index of the current country
  //3. check if the last char is exactly the charEnding and return all matching results
  let filteredCountry = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    //  last index
    const lastIndex = current.length - 1;

    // char at last index
    const charAtCurrent = current.charAt(lastIndex);
    if (charAtCurrent === charEnding) {
      filteredCountry.push(current);
    }
  }
  return filteredCountry;
}

// my name is firstname lastname.

const finalCountryList = countriesWithSameLastChar(countries_2, "n");

console.log(finalCountryList, "finalCountryList");

// charCodeAt - returns the ASCII code value at the given index
let codeAtData = "Kavascript";
let codeAt = codeAtData.charCodeAt(0);
console.log(codeAt, "codeAt");

let finalAlphabets = "";
function nextFourAlphabets(alphabet) {
  //1. get teh char code for varaible alphabet
  const alphabetToCode = alphabet.charCodeAt(0);
  const alphabetTwo = alphabetToCode + 1;
  const alphabetThree = alphabetToCode + 2;
  const alphabetFour = alphabetToCode + 3;

  for (let i = 0; i < 4; i++) {
    finalAlphabets = finalAlphabets + String.fromCharCode(alphabetToCode + i);
  }
  // console.log(
  //   String.fromCharCode(alphabetToCode),
  //   String.fromCharCode(alphabetTwo),
  //   String.fromCharCode(alphabetThree),
  //   String.fromCharCode(alphabetFour)
  // );
  return finalAlphabets;
}

const finalAlphabetsResult = nextFourAlphabets("a");

console.log(finalAlphabetsResult, "finalAlphabetsResult");

// indexOf - takes in substring and return the index if present and -1 if absent
let indexOfData = "10 is a number";

if (indexOfData.indexOf("100") != -1) {
  console.log(indexOfData.indexOf("100"), "positive");
} else {
  console.log(indexOfData.indexOf("100"), "negative");
}

//
function fullname(name, surname) {
  let myname = "my name is " + name + " " + surname;
  let ab = `My name is ${name} ${surname}`;

  return ab;
}
console.log(fullname("Ayomide", "Smith"));

//create a function
function fullName(firstName, lastName) {
  //create a variable to store the first string
  const first = "my name is ";
  //preform the concatenation method
  return first.concat(firstName, lastName) + ".";
}

// log the function
console.log(fullName("John ", "Doe"));

function myStartswith(mainstring, substring) {
  return mainstring.startsWith(substring);
}

console.log(myStartswith("This Javescript no be beans", "beans"));

// match
let matchData = "This Javescript no be no beans";
console.log(matchData.match(/no/gi));
