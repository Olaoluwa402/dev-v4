// const person = {
//   firstName: "John",
//   lastName: "Lothbrok",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// person.friends = ["Daniel", "Jane", "Thomas"];
// person.nationality = "Viking";
// person.firstName = "Bjorn";
// person.age = 25;
// person.getAge = () => {
//   return person.age * 2;
// };
// console.log(person.getAge());

// const secondPersonObject = Object.assign({}, person);
// console.log(secondPersonObject);

// const objectKeys = Object.keys(person);
// console.log(objectKeys);

// const objectEntries = Object.entries(person);
// console.log(objectEntries);

// const objectHasProperty = Object.hasOwnProperty(age);

// const daysOfTheWeek = {
//   0: "Sunday",
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
// };

// let daysPrompt = prompt("give me a number and I will give you a day");

// const daysFunc = (dayparam) => {
//   let daysOfTheWeekKeys = Object.keys(daysOfTheWeek);

//   for (let int = 0; int < daysOfTheWeekKeys.length; int++) {
//     if (dayparam == int) {
//       return `Today is ${daysOfTheWeek[dayparam]}.`;
//     }
//   }
//   return "Not a valid input. Refresh page and try again";
// };

// alert(daysFunc(daysPrompt));

// const fruits = ["p", "q", "p", "s", "p"];
// const fruitSet = new Set(fruits);
// //
// let fruitSetArray1 = [];
// for (const fruits of fruitSet) {
//   fruitSetArray1.push(fruits);
// }
// //
// const fruitSetArray = [...fruitSet];
// console.log(fruitSetArray1, "from for loop");
// // console.log(fruitSet);
// console.log(fruitSetArray, "from spread method");

// const list = ["JavaScript", "Java", "Python", "Javascript", "Java"];
// const listSet = new Set(list);
// console.log(listSet);

// listSet.add("app1");
// listSet.add("app2");
// listSet.add("app3");
// console.log(listSet.size);
// let arrMinusP = [];
// for (const item of listSet) {
//   const lowerItem = item.toLowerCase();
//   if (lowerItem.includes("p")) {
//     listSet.delete(item);
//   }
// }
// console.log(listSet);
const stateCapital = [
  ["Lagos", "Ikeja"],
  ["Oyo", "Ibadan"],
  ["Ekiti", "Ado-Ekiti"],
  ["Kwara", "Ilorin"],
];

const mapData = new Map(stateCapital);
// console.log(mapData);

const mapDataAdd = [
  ["Js", 2],
  ["HTML", 10],
  ["CSS", 5],
];

// console.log(mapDataAdd);
const ff = ["e", "r"];
const gg = [...ff];
console.log(gg);

// let newArr = [...mapDataAdd];
// let newArr2 = [...newArr];
// console.log(newArr);

// for (let item = 0; item < mapDataAdd.length; item++) {
//   let newArr = [...mapDataAdd[item]];
//   console.log(newArr);
//   // mapData.set(mapDataAdd[item][0], mapDataAdd[item][1]);
//   // mapData.set(newArr2);
// }

// console.log(mapData);
