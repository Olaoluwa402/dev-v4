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

console.log(twoArr(arr));
