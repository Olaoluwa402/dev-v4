"use strict";
let a = 12;

function add(c, d = 0) {
  console.log(c, d);
  let b = 30;
  //   let a = 50;
  console.log(a, "a");
  console.log(b);

  function sub() {
    let g = 45;
    console.log(g);
    console.log(b);
  }
  //   console.log(g);
  //   sub();
}

// add(12, 40);

function gText() {
  var h = "john";
  let j = "james";
}
// console.log(h, "h");
// console.log(j, "j");

if (true) {
  var n = "nigeria";
  let p = "pap";
}

// console.log(n);
// console.log(p, "p");

const person = {
  firstName: "Joe",
  lastName: "Jude",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

// add the folowing to the person object and observe the new result
//friends
//nationality
//update firstName to a diffrent name
//add age
//add a getAge *  2 function

person.age = 20;
person.friends = ["Ola"];
person.getAge = function () {
  return `${this.age * 2}`;
};
person.friends.push("James");
console.log(person);

// loop for objects

for (let key in person) {
  console.log(person[key], "key");
}
