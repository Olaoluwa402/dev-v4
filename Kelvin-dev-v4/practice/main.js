// // const listOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15];

// // const evenArr = (mainArr) => {
// //   const evenArr = [];
// //   for (let i = 0; i < mainArr.length; i++) {
// //     if (mainArr[i] % 2 == 0) {
// //       evenArr.push(mainArr[i]);
// //     }
// //   }
// //   return evenArr;
// // };

// // console.log(evenArr(listOfNum));
// // console.log(listOfNum);

// const person = {
//   firstName: "Ben",
//   lastName: "White",
//   age: 112,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "Javascript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   isMarried: true,
// };

// let personString = `${person.firstName}
// ${person.lastName}
// ${person.age}
// ${person.country}
// ${person.city}
// ${person["skills"][2]}
// ${person["isMarried"]}
// `;

// console.log(personString);

// console.log(
//   person.firstName,
//   "\n",
//   person.lastName,
//   "\n",
//   person.age,
//   "\n",
//   person.country,
//   "\n",
//   person.city,
//   "\n",
//   person["skills"][3],
//   "\n",
//   person["isMarried"],
//   "\n"
// );

let a = { age: 77 };
let b = a;
let c = { age: 77 };

console.log(c != a);
