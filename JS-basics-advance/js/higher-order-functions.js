const { log } = console;
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
  { title: "Lord of the Ring", author: "ay", isbn: 1, price: "$200", qty: 2 },
  { title: "Game of thrones", author: "ay", isbn: 2, price: "$300", qty: 5 },
  { title: "wonder", author: "johnson", isbn: 3, price: "$250", qty: 4 },
  { title: "made in black", author: "black", isbn: 4, price: "$400", qty: 3 },
  { title: "james is  back", author: "james", isbn: 5, price: "$500", qty: 1 },
];

function searchBook(books, keyword) {
  const foundBooks = books.filter(
    (book) => book.title.startsWith(keyword) || book.author === keyword
  );
  return foundBooks;
}

// console.log(searchBook(books, "made"));

/* { title: "Lord of the Ring", author: "ay", isbn: 1, price: "$200" },
{ title: "Game of thrones", author: "ay", isbn: 2, price: "$300" } */
//searchBook(books, "wonder"); // { title: "wonder", author: "johnson", isbn: 3, price: "$250" }

// map function
//[200,300,250,400,500]
// log(
//   books.map(({ price, qty }) => Number(price.slice(1)) * qty),
//   "newBook"
// );
const bookPrices = books.map(function (book) {
  return Number(book.price.slice(1)) * book.qty;
});

// log(bookPrices);

let total = 0; //initial value
for (let i = 0; i < bookPrices.length; i++) {
  //accumaulator + current
  total = total + bookPrices[i];
}

// log(total);

const nums = [1, 2, 3];
const totolWithReduce = nums.reduce((acc, curr) => acc + curr, 5);
// log(totolWithReduce);

function findBook(books, isbn) {
  return books.find((book) => book.isbn === isbn);
}

// log(findBook(books, 6));

// perform a seearch to find matched prices
function findByPrice(books, price) {
  return books.filter((book) => +book.price.slice(1) >= price);
}

// log(findByPrice(books, 400));

// perform a seearch to find matched prices and qty
function findByPrice(books, price, qty) {
  return books.filter(
    (book) => +book.price.slice(1) >= price && book.qty >= qty
  );
}

// log(findByPrice(books, 400, 1));

function updatedPrice(books, isbn, updatedPrice) {
  const index = books.findIndex((book) => book.isbn === isbn);
  books[index].price = `$${updatedPrice}`;
  return books;
}

// log(updatedPrice(books, 4, 670));

const ab = [
  { id: 1, name: "john" },
  { id: 2, name: "james" },
  { id: 3, name: "bayo" },
];


const sortedDesc = ab.sort((a, b) => a.id - b.id);

log(sortedDesc);
// sort the book list by price in descending order

function sortBooksDesc(books) {
  const sorted = books.sort(
    (current, previous) => +previous.price.slice(1) - +current.price.slice(1)
  );
  return sorted;
}

// log(sortBooksDesc(books));
