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

const daysOfTheWeek = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const daysFunc = (days) => {
  let daysOfTheWeekKeys = Object.keys(daysOfTheWeek);

  for (let int = 0; int < daysOfTheWeekKeys.length; int++) {
    if (days == int) {
      return `Today is ${daysOfTheWeek[days]}.`;
    }
  }
  return NaN;
};

console.log(daysFunc(6));
