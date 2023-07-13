/*
// if block
if(){}
*/

/*

// if else
if(){

}else{

}

*/

/*
// if, else if, else
if(){

}else if(){

}else if(){

}else{

}

*/

// write a function that returns day off the week

function dayOfTheWeek(day) {
  const dayToLowerCase = day.toLowerCase();

  if (dayToLowerCase === "sunday") {
    return `yeah, today is ${dayToLowerCase}`;
  } else if (dayToLowerCase === "monday") {
    return `yeah, today is ${day}`;
  } else if (dayToLowerCase === "tuesday") {
    return `yeah, today is ${dayToLowerCase}`;
  } else if (dayToLowerCase === "wednesday") {
    return `yeah, today is ${dayToLowerCase}`;
  } else if (dayToLowerCase === "thursday") {
    return `yeah, today is ${dayToLowerCase}`;
  } else if (dayToLowerCase === "friday") {
    return `yeah, today is ${dayToLowerCase}`;
  } else if (dayToLowerCase === "saturday") {
    return `yeah, today is ${dayToLowerCase}`;
  } else {
    return `${dayToLowerCase} is not a valid week day`;
  }
}

const dayFeedback = dayOfTheWeek("sunDa");

// console.log(dayFeedback, "day");

// switch statement

function dayWithSwitch(day) {
  switch (day) {
    case "monday":
      let a = 23;
      let b = 13;
      const total = a * b;
      console.log(total);
      return `Today is ${day}- ${total}`;
    case "tuesday":
      return `Today is ${day}`;
    case "wednesday":
      return `Today is ${day}`;

    default:
      return `Not a valid week day`;
  }
}

// console.log(dayWithSwitch("monday"));

function canVote(age) {
  switch (true) {
    case age < 18:
      return `You are not eligible at ${age}`;
    case age >= 18 && age <= 60:
      return `You are eligible at ${age}`;
    case age > 60:
      return `You are too old at ${age}`;
    default:
      return `Not a valid age`;
  }
}

// console.log(canVote(100));

let age = 30;
const final =
  age < 18
    ? "You are too young"
    : age >= 18 && age <= 60
    ? "You are eligible to vote"
    : "Not a valid age";

console.log(final);
