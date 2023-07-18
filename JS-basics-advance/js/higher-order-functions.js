// write a function that increment by 5 a set count value after every 5 seconds
// let count = 0;
// const interval = setInterval(counter, 5000);

// function counter() {
//   count = count + 5;
//   console.log(count);

//   if (count == 30) {
//     clearInterval(interval);
//   }
// }

// forEach
// calculate the multiple by 2 of each item of the given array and total the sum
const arr = [1, 2, 3, 4, 5]; /* [1,4,6] => 60 */

let sum = 0;
let prodArr = [];
arr.forEach((curr) => {
  sum = sum + curr * 2;
  prodArr.push(curr * 2);
});

console.log(sum);

let prodSum = 0;
prodArr.forEach((item) => {
  prodSum += item;
});

console.log(prodSum, "prodSum");

// filter
// perform a search through the foll book list using the title and author field
//and return the search result
const books = [
  { title: "Lord of the Ring", author: "ay", isbn: 1, price: "$200" },
  { title: "Game of thrones", author: "ay", isbn: 2, price: "$300" },
  { title: "wonder", author: "johnson", isbn: 3, price: "$250" },
  { title: "made in black", author: "black", isbn: 4, price: "$400" },
  { title: "james is  back", author: "james", isbn: 5, price: "$500" },
];

function searchBook(books, keyword) {
  const foundBooks = books.filter(
    (book) => book.title.startsWith(keyword) || book.author === keyword
  );
  return foundBooks;
}

console.log(searchBook(books, "made"));

/* { title: "Lord of the Ring", author: "ay", isbn: 1, price: "$200" },
{ title: "Game of thrones", author: "ay", isbn: 2, price: "$300" } */
//searchBook(books, "wonder"); // { title: "wonder", author: "johnson", isbn: 3, price: "$250" }
