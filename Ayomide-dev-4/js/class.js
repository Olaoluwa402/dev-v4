// let name = Ayomide;
// let surname = Smith;

// function fullname(name, surname) {
//   let myname = "My Name is " + name + " " + surname;

//   return myname;
// }
// console.log(fullname("Ayomide", "Smith"));

// //  starts with

// function words(argument, confirm) {
//   return argument.startsWith(confirm);
// }
// console.log(words("javascript is new and renovative language", "is"));

// const ass = {
//   friends: [
//     {
//       name: "John",
//       skills: ["JS", "HTML", "CSS"],
//     },
//     {
//       name: "Dayo",
//       skills: ["JS", "HTML"],
//     },
//   ],
// };

// // const ass = [0].skills[3]
// const tain = ass.friends[0].skills[2];
// console.log(tain);

// const sliceData = [1, 3, 5, 6, 8, 10, 9, 70];

// return 8,10,9
// return 1,3,5,6,8,10,9,70
// 70

// console.log(sliceData.slice(4, 7));
// console.log(sliceData.slice(0, sliceData.length));
// console.log(sliceData.slice(7, sliceData.length));

// replace 789 in the data with john, james and bayo

// const textData = [3, 5, 9, 7, 8, 9];

// console.log(textData.splice(3,3,"John", "James", "Bayo"));

// const cut = textData.splice(3, 3, "John", "James", "Bayo");

// console.log(cut);

// console.log(textData.push(cut));

// console.log(textData);

// textData.pop();

// console.log(textData);

// textData.shift();
// console.log(textData);

// const reverseData_1 = [10, 11, 12, 13];
// const reverseData_2 = [1, 2, 3, 4, 5];

// [1, 2, 3, 4, 5, 10, 11, 12, 13];

// const work = reverseData_2.concat(reverseData_1);
// console.log(work);

// work.reverse();

// console.log(work);

// function daysOfTheWeek(days) {
//   if (days === "Sunday" || "saturday" || "friday") {
//     return `yeayyyy it is ${days}`;
//   } else if (days === "mondays" || "tuesday" || "wednesday" || "thursday") {
//     return `${days} is a workday`;
//   } else {
//     return "not a day.";
//   }
// }

// console.log(daysOfTheWeek("tues"));

// const days = "mondays";
// function dayWithSwitch(days) {
//   switch (days) {
//     case "monday":
//       return `it is monday`;
//     case "tuesday":
//       return `it is tuesday`;
//     case "wednesday":
//       return `it is wednesday`;
//     case "thursday":
//       return `it is thursday`;
//     case "friday":
//       return `it is friday`;
//     case "saturday":
//       return `it is saturday`;
//     case "sunday":
//       return `it is sunday`;

//     default:
//       return "NO DAY LIKE THAT";
//   }
// }
// console.log(dayWithSwitch("mondy"));

// const person = {
//   firstName: "Ben",
//   lastName: "White",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Phython",
//     "D3.js",
//   ],
//   isMarried: true,
// };
// using.dot;
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.country);
// console.log(person.city);

// // using boxblok
// console.log(person.skills[3]);
// console.log(person["isMarried"]);

// const person1 = {
//   firstName: "Joe",
//   lastName: "Jude",

//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// (person.friends = ["Ayo", "Jade", "Dayo"]), (person1.firstName = "Jide");
// person1.Nationality = "Nigeira";
// person1.age = "21";

// person1.age = "21";
// person1.getAge = function () {
//   return `${this.age * 2}`;
// };

// console.log(person1.fullName());
// console.log(person1.getAge());

// const copyperson = Object.assign({}, person1);
// console.log(copyperson);

// const keys = Object.keys(person1);
// console.log(keys);

// const entries = Object.entries(person1);
// console.log(entries);

WeekDays = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

function ayDays(num) {
  const objkeys = Object.keys(WeekDays);
  console.log(objkeys);
  for (i = 0; i < objkeys.length; i++) {
    if (num == objkeys[i]) {
      return `${WeekDays[num]}`;
    }
  }
}

console.log(ayDays(6));

const { log } = console;

// CREATE AN EMPTY SET
const newWork = new Set();
log(newWork);

const list = ["john", "james", "john"];

// add items to set

const uniqueList = new Set(list);
log(uniqueList);

const mortalList = [...uniqueList];
log(mortalList);

const arr = ["mango", "orange", "mango", "apple", "apple", "carrot"];

const fruit = new Set(arr);
log(fruit);

const myFruit = [...fruit];
log(myFruit);

let fruitArr = [];
for (const item of fruit) {
  // log(item, [...item]);
  fruitArr.push(item);
}
log(fruitArr);
// log(item,[...item]);

const addData = new Set(fruit);
addData.add("data1");
addData.add("data2");
addData.add("data3");
const size = addData.addDatasize;
log(addData, addData.size);

const list2 = ["javascript", "java", "python", "javacript", "java"];
const addData2 = new Set(list2);

addData2.add("app1");
addData2.add("app2");
addData2.add("app3");

log(addData2, addData2.size);

// delete

let myData = [];
for (basket of addData2) {
  const myDat = basket.toLowerCase();
  if (myDat.includes("p")) {
    addData2.delete(basket);
  }
}
log(addData2);

const arr1 = [13, 15, 20, 10];
const arr2 = [9, 13, 10, 14, 17];

// get union

const arr3 = [...arr1, ...arr2];
const arr4 = new Set(arr3);
log(arr4);

// set interset

let A = new Set(arr1);
let B = new Set(arr2);

const arr5 = arr1.filter((num) => B.has(num));
const arr6 = new Set(arr5);
log(arr6);

// const arr5 = arr1.filter(function(n) {
//   return B.has(n);
// });
// const arr7 = new Set(arr5);
// log(arr7);

// MAP

// CREATE A MAP
const newMap = new Map();
log(newMap);

// size of a map
const size1 = newMap.size;
log(size1);

// adding items

// passing an array
const mapArr = [
  ["lagos", "ikeja"],
  ["Oyo", "Ibadan"],
  ["Ekiti", "Ado"],
];

// let fruitArr = [];
// for (const item of fruit) {
//   // log(item, [...item]);
//   fruitArr.push(item);
// }

const mapData = new Map(mapArr);
mapData.set("Abuja", "FCT");
log(mapData);

const mapData2 = [
  ["JS", "2"],
  ["HTML", "10"],
  ["CSS", "5"],
];

// const mapDats = new Map(mapData2);
// log(mapDats);

// let mapDats1 = [];
for (let i = 0; i < mapData2.length; i++) {
  mapData.set(mapData2[i][0], mapData2[i][1]);
}
log(mapData);

// xcercise: write a annonymous that calculate the perimeter of a circle 2pir
//   const perimeter = function (radius) {
//     const PI = Math.PI
//     perimeterCircle = 2 * PI * radius

//  return Math.ceil(perimeterCircle);
//   }

//   log(perimeter(5));

// another method
const circlePerimeter = function (r) {
  return Math.ceil(2 * Math.PI * r);
};

const result = circlePerimeter;
log(circlePerimeter(2));

// annoymous function
function outer() {
  return function () {
    return 2;
  };
}

log(outer()());

const Me = {
  fullName: function () {
    return "Jade Shile";
  },
};

log(
  (function () {
    return Me.fullName();
  })()
);

log(
  (function (r) {
    return r * Math.max(2, 4, 7, 11);
  })(4)
);

// function increment(duration) {
//   return duration * 1;
// }
// log(increment(5));

// setInterval(increment);

// function seconds(add) {
//   log("Hello");
// }
// setInterval(seconds, 5);

// let count = 0;
// const interval = setInterval(counter, 5000);

// const counter = () => {
//   count = count + 5;
//   log(count);

//   if (count == 30) {
//     clearInterval(interval);
//   }
// };

const ari = [1, 2, 3, 4, 5];

// let arrpod =[];
// ari.forEach ((curr)=> {
//   arrpod.push(curr * 2);
// });

// log(arrpod)

let sum = 0;
ari.forEach((curr) => {
  sum = sum + curr * 2;
});
log(sum);

const book = [
  { title: "Lord of the Rings", author: "ay", isbn: "1", price: "$200" },
  { title: "Games of thrones", author: "ay", isbn: "2", price: "$300" },
  { title: "wonder", author: "johnson", isbn: "3", price: "$250" },
  { title: "made in black", author: "black", isbn: "4", price: "$400" },
  { title: "james is back", author: "james", isbn: "5", price: "$500" },
];

let myBook = [];

// function Ebook (books, Keyword) {
//   book.filter((Ebook) => {
//     myBook.push(Ebook);
//   });
// };

// log(Ebook("black"));

// let isbn =[]

// const index = book.findIndex((book)=> book.isbn === isbn);
// book[0].price= `${$700}`;
//       log(book);

const arry = [
  2,
  "john",
  [3, 4, 5],
  { name: "John", age: 20 },
  15,
  "bola",
  null,
];

let [craft1, craft2, craft3, craft4] = arry;

log(craft1, craft2, craft3, craft4);

let [, ...rest] = arry;
log(rest);

let arry2 = ["cashew", "password", "orange", "mango", "banana", "apple"];

let [abi, , ...best] = arry2;
best.unshift(abi);
log(best);

const continent = [
  { africa: [
    ["lagos","ikeja"],
    ["oyo","ibadan"],
    ["kwara","ilorin"],
  ],
},
];
log(continent);

let ([{continent2}]) = continent;
 


//  for (let [state, capitals]of africa) {
//   log(state,capitals);
//  }
