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

<<<<<<< HEAD
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
    {title:"lord of the rings", author:"ay", isbn:1, price:"$200"},
    {title:"Game of thrones", author:"ay", isbn:2, price:"$300"},
    {title:"Wonder", author:"Johnson", isbn:3, price:"$250"},
    {title:"Men in Black", author:"Black", isbn:4, price:"$400"},
    {title:"Kweku the traveller", author:"James", isbn:5, price:"$500"},
];
// Write code to implement searching for book using title or author name as input parameter from user
function searchBooks(book,keyword){
    const searchedbooks = books.filter((book)=> book.title === keyword || book.author === keyword);
    return searchedBooks;
}

console.log(searchBooks(books,"ay"))
=======
console.log(twoArr(arr));
>>>>>>> 8f9b38706ad2cd7f537f0691c3fd32d073889e9c
