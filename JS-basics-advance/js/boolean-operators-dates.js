// boolean
if ("") {
  console.log("two");
}

const a = 7;
const b = [1, 2, 3, 4, 5];

if (
  typeof a === "string" &&
  a > b[2] &&
  (b.length > 0 || b[1] * a < b.length)
) {
  console.log("true");
} else {
  console.log("false");
}

// windows methods
// alert("hello");
// const age = prompt("what is your age");
// if (!age) {
//   alert("please supply your age");
// }
// console.log(age);

// confirm
// const decision = confirm("Are you sure you want to delete this item?");
// console.log(decision);
// if (decision) {
//   console.log("item deleted");
// } else {
//   console.log("item not deleted");
// }

// date

// YYYY-MM-DD 07:54:55 2023-12-04 07:54:55
// const dateString = new Date();
// console.log(dateString);
// const str = `${dateString.getFullYear()}-${
//   dateString.getMonth() + 1
// }-${dateString.getDate()} ${dateString.getHours()}:${dateString.getMinutes()}`;

// console.log(str);
const dateString = new Date();
const index = dateString.toString().indexOf("GMT");
const actualDate = dateString.toString().substring(0, index - 1);
console.log(actualDate);
