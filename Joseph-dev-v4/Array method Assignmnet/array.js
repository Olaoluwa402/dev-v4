// Q.1 Declare an Empty Array

const emptyarr = Array();

console.log(emptyarr, "emptyarr");

// Q.2 Declare an Array with more than 5 numbers opf element

const arr = [ 5, 4, "john", "egg", 7, 30, "man"];

console.log(arr, "arr");

// Q.3 Find the lenght of your Array

console.log(arr.length, "array lenght");

// Q.4 Get the first, Middle and Last items of the array

const firstItem = arr[0];
const middleItem = arr[3];
const lastItem = arr[arr.length-1];

console.log(firstItem, "firstItem");

console.log(middleItem, "middletItem");

console.log(lastItem, "lastItems");

// Q.5 create an Array with mixed data type and find the lenght

 const mixedDataTypes = ["Mango", 34, 15, {Starch:["rice", "maize", "yam", 5]}, 10, 9, "Java" ];

 console.log(mixedDataTypes.length, "mixedDataTypes");

 // Q.6 Declare an array of IT companies

 const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

 // Q.7 Print the array

  console.log(itCompanies, "itcompanies");

  // Q.8 Print number of companies in the array

  console.log(itCompanies.length, "itCompanies.length");

  // Q.9 print the first company, middle and last

  const firstCompany = itCompanies[0];
  const middleCompany = itCompanies[3];
  const lastCompany = itCompanies[itCompanies.length - 1];

  console.log(firstCompany, "firstCompany");
  console.log(middleCompany, "middleCompany");
  console.log(lastCompany, "lastCompany");

// Q.10 print out each company.

console.log(itCompanies, "itcompanies");

// Q.11 Change to Uppercase and print

const changeToString = itCompanies.toString();

console.log(changeToString)

const upperCase = changeToString.toUpperCase();

console.log(upperCase, "upperCase");


