// const books = [
//   { title: "Lord of the rings", author: "Ay", ISBN: 1, price: "$200" },
//   { title: "song of Ice and Fire", author: "Ay", ISBN: 2, price: "$100" },
//   { title: "Dance of dragons", author: "Lily", ISBN: 6, price: "$500" },
//   { title: "Velarion", author: "sewa", ISBN: 3, price: "$300" },
//   { title: "snow", author: "Joy", ISBN: 5, price: "$800" },
// ];

// const objectMap1 = books.map((elem) => {
//   // let bookPrice1 = elem.price;
//   return +elem.price.slice(1);
// });

// console.log(objectMap1.reduce((arr, curr) => arr + curr, 0));

// const objectMap2 = books
//   .map((elem) => {
//     // let bookPrice1 = elem.price;
//     return +elem.price.slice(1);
//   })
//   .reduce((arr, curr) => arr + curr, 0);
// console.log(objectMap2);

// const objectMap3 = books
//   .map((elem) => {
//     // let bookPrice1 = elem.price;
//     return +elem.price.slice(1);
//   })
//   .every((num) => typeof num === "number");
// console.log(objectMap3);

// function bookFind(book, isNum) {
//   const findBookIsbn = book.find((book) => book.ISBN == isNum);
//   return findBookIsbn;
// }
// console.log(bookFind(books, 6));
// function priceChangeByIsbn(arr, num) {
//   const indexOfIsbn = arr.findIndex((book) => book.ISBN === num);
// console.log(indexOfIsbn);
// arr[indexOfIsbn].price = "$1,200";
// return arr[indexOfIsbn];
// console.log(rr);
// }
// console.log(priceChangeByIsbn(books, 5));

// function orderBook(obj) {
//   const priceNumConvert = obj.map((elem) => {
//     return +elem.price.slice(1);
//   });
//   console.log(priceNumConvert);
//   priceNumConvert.sort
// }
// orderBook(books);

// let arr2 = ["cashew", "password", "orange", "mango", "banana", "apple"];
// let [item1, , ...item2] = arr2;
// let newArr = item1.concat(",", item2);
// nw3 = newArr.split(",");
// console.log(nw3);
// console.log(item1, item2);

// const continent = [
//   {
//     Africa: [
//       ["Lagos", "Ikeja"],
//       ["Oyo", "Ibadan"],
//       ["Kwara", "Ilorin"],
//     ],
//   },
// ];

// for (let { Africa } of continent) {
//   console.log(Africa);
//   for (let [state, capital] of Africa) {
// console.log(state, capital);
//   }
// }

// class person {
//   constructor(firstName, lastName, email, courses) {
//     (this.firstName = firstName), (this.lastName = lastName);
//     this.emailAddress = email;
//     this.courses = courses;
//   }

//   getCourses() {
//     return this.courses;
//   }

//   addCourse(course) {
//     if (Array.isArray(course)) {
// for (let item of course) {
//   this.courses.push(item);
// }
// let newArr = this.courses;
// newArr.concat(course);
// console.log(newArr);
//       return this.courses.concat(course);
//     } else {
//       this.courses.push(course);
//       return this.courses;
//     }
//   }
// }

// const janeData = new person("Jane", "stone", "Janestone@email.com", [
//   "HTML",
//   "CSS",
//   "Javascript",
//   "React",
//   "NodeJS",
//   "ExpressJS",
// ]);

// console.log(janeData.getCourses());

// janeData.addCourse(["PHP", "SQL", "MongoDB"]);
// console.log(janeData.addCourse(["PHP", "SQL", "MongoDB"]));

// const one = [1, 2, 3];
// const two = [4, 5, 6];
// const three = one.concat(two);
// console.log(three);

class Bird {
  constructor(numLegs, numEyes, kingdom, sound) {
    this.numLegs = numLegs;
    this.numEyes = numEyes;
    this.kingdom = kingdom;
    this.sound = sound;
  }

  getSound() {
    return "caw";
  }
}

class eagles extends Bird {
  constructor(numLegs, numEyes, kingdom, sound, gender, type) {
    super(numLegs, numEyes, kingdom, sound);
    this.gender = gender;
    this.type = type;
  }
}

const firstEagle = new eagles(2, 1, "animalia", "eaglesound", "male", "bald");

const secondEagle = new eagles(
  1,
  3,
  "animalia",
  "eaglesound",
  "female",
  "bald"
);

console.log(firstEagle, secondEagle);
